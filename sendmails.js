const fs = require('fs');
const csv = require('csv-parser');
const { parse, stringify } = require('csv');
const nodemailer = require('nodemailer');
require('dotenv').config();
const htmlTemplate = require('./HtmlTemplet');


// Start the process
const emails = [];
function TimeStamp() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
    const day = date.getDate();
    const hour = date.getHours(); // getHours() returns the hour
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return `${day}-${month}-${year} ${hour}:${min}:${sec}`;
}

function logError(message) {
    const time = TimeStamp();
    const logLine = `${time} - ${message} - \n`;
    fs.appendFileSync('Sending_Reply_log.txt', logLine, (err) => {
        if (err) {
            console.error('Error writing to log file:', err.message);
        }
    });
}

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to read the CSV file and send emails
function sendEmailsFromCSV() {
    console.log('Readin Csv file')
    fs.createReadStream('unseen_emails.csv')
        .pipe(csv())
        .on('data', (row) => {
            emails.push(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            sendEmails(emails, 0);
        });
}
// Create CSV file with headers if it doesn't exist
if (!fs.existsSync('succes_reply_log.csv')) {
    fs.writeFileSync('succes_reply_log.csv', 'To,Subject,SentAt\n');
}
//function to store succes reply in csv file
function logToCSV(to, subject) {
    const csvLine = `${to},${subject},${TimeStamp()}\n`;
    fs.appendFileSync('succes_reply_log.csv', csvLine, (err) => {
        if (err) {
            console.error('Error writing to CSV file:', err.message);
            logError(`Error  ${err}`);
        }
    });
}
// Function to send emails with a delay
function sendEmails(emails, index) {
    if (index >= emails.length) {
        logError('All replies have been sent');
        console.log('All emails have been sent');
        return;
    }
    // console.log('seding email to ',emails[])

    const email = emails[index];
    // console.log(email);
    logError(`Sending reply to: ${email.Email}`);
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email.Email,
        subject: 'Re: ' + email.Subject,
        html: htmlTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logError(`Error sending email ${mailOptions.to} - ${error.message}`);
            return console.log(error);
        }

        logError(`Reply sent to: ${mailOptions.to}`);
        logToCSV(mailOptions.to,mailOptions.subject)
        console.log('Email sent: ' + mailOptions.to);

        // Remove the successfully sent email from the CSV
        removeSentEmail(email.Email);
        
        // Delay before sending the next email
        setTimeout(() => {
            sendEmails(emails, index + 1);
        }, 1000); // 1-second delay between emails
    });
}

// Function to remove sent email from the CSV file
function removeSentEmail(emailToRemove) {
    fs.readFile('unseen_emails.csv', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading CSV file:', err.message);
            return;
        }

        parse(data, { columns: true }, (err, records) => {
            if (err) {
                console.error('Error parsing CSV file:', err.message);
                return;
            }

            // Filter out the email that has been sent
            const updatedRecords = records.filter(record => record.Email !== emailToRemove);

            // Convert the updated records back to CSV format
            stringify(updatedRecords, { header: true }, (err, output) => {
                if (err) {
                    console.error('Error stringifying CSV data:', err.message);
                    return;
                }

                // Write the updated data back to the CSV file
                fs.writeFile('unseen_emails.csv', output, (err) => {
                    if (err) {
                        console.error('Error writing updated CSV file:', err.message);
                    }
                });
            });
        });
    });
}


sendEmailsFromCSV();
