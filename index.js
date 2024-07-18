const Imap = require('imap');
const { simpleParser } = require('mailparser');
const fs = require('fs');
require('dotenv').config();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const imap = new Imap({
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASS,
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
});

const filteredDomainsAndKeywords = [
  'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
  'icloud.com', 'aol.com', 'protonmail.com', 'zoho.com', 'gmx.com',
  'notify', 'no-reply', 'noreply', 'donotreply', 'do-not-reply', 'automail'
];

function openInbox(cb) {
  imap.openBox('INBOX', false, cb);
}

function filterEmails(email) {
  const from = email.replyTo ? email.replyTo.value[0].address : email.from.value[0].address;
  return !filteredDomainsAndKeywords.some(keyword => from.includes(keyword));
}

function fetchEmails() {
  console.log('Fetching emails...');
  imap.search(['UNSEEN'], (err, results) => {
    if (err) throw err;

    if (!results || !results.length) {
      console.log('No unseen emails found');
      imap.end();
      return;
    }

    const f = imap.fetch(results, { bodies: '' });

    f.on('message', msg => {
      msg.on('body', stream => {
        simpleParser(stream, (err, parsed) => {
          if (err) throw err;

          if (filterEmails(parsed)) {
            const from = parsed.replyTo ? parsed.replyTo.value[0].address : parsed.from.value[0].address;
            const emailRecord = {
              email: from,
              subject: parsed.subject,
              messageid: parsed.messageId
            };
            writeEmailToCSV(emailRecord);
          }
        });
      });
    });

    f.once('end', () => {
      console.log('Done fetching emails');
      imap.end();
    });
  });
}

const csvWriter = createCsvWriter({
  path: 'unseen_emails.csv',
  header: [
    { id: 'email', title: 'Email' },
    { id: 'subject', title: 'Subject' },
    { id: 'messageid', title: 'MessageID' }
  ],
  append: true // Append to the file instead of overwriting
});

function writeEmailToCSV(emailRecord) {
  csvWriter.writeRecords([emailRecord])
    .then(() => {
      console.log('Email written to CSV:', emailRecord.email);
    })
    .catch(err => {
      console.error('Error writing to CSV:', err);
    });
}

imap.once('ready', () => {
  openInbox((err, box) => {
    if (err) throw err;
    fetchEmails();
  });
});

imap.once('error', err => {
  console.error(err);
});

imap.once('end', () => {
  console.log('Connection ended');
});

imap.connect();
