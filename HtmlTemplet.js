const  htmltemplet = `
 <p>Hello,</p>
<p>Hope you are doing great.</p>
<p>I'm updating my HOTLIST with top-notch candidates available immediately on C2C. If you have any suitable requirements for them, please keep me posted.</p>
<p>Additionally, please add my email,peter@innova-path.com, to your daily distribution list. You can also reach me at (510) 870-6360.</p>
<p>Best regards,</p>
<p>Peter</p>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotlist Table</title>
</head>
<body>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Skill</th>
                <th>Locations</th>
                <th>Visa</th>
                <th>Resume</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Chitra</td>
                <td>9 years</td>
                <td>QA Engineer/SDET</td>
                <td>Bay Area CA</td>
                <td>USC</td>
                <td><a href="https://tinyurl.com/ytwrwxn5">https://tinyurl.com/ytwrwxn5</a></td>
            </tr>
            <tr>
                <td>Yamuna</td>
                <td>9+ years</td>
                <td>SDET</td>
                <td>Bay Area CA</td>
                <td>GC</td>
                <td><a href="https://tinyurl.com/4tzcktb8">https://tinyurl.com/4tzcktb8</a></td>
            </tr>
            <tr>
                <td>Deepthi</td>
                <td>9 Years</td>
                <td>QA Engineer/SDET</td>
                <td>Cedar RapidsIA</td>
                <td>H4 EAD</td>
                <td><a href="https://shorturl.at/hcisF">https://shorturl.at/hcisF</a></td>
            </tr>
            <tr>
                <td>Anitha</td>
                <td>8 years</td>
                <td>QA Engineer/SDET</td>
                <td>San Anto TX</td>
                <td>H4 EAD</td>
                <td><a href="https://shorturl.at/jsNsq">https://shorturl.at/jsNsq</a></td>
            </tr>
            <tr>
                <td>Geetha</td>
                <td>8 Years</td>
                <td>QA Engineer/SDET</td>
                <td>VA</td>
                <td>GC EAD</td>
                <td><a href="https://shorturl.at/WmV4g">https://shorturl.at/WmV4g</a></td>
            </tr>
            <tr>
                <td>Surekha</td>
                <td>8 Years</td>
                <td>Front End Developer</td>
                <td>TX</td>
                <td>L2 EAD</td>
                <td><a href="https://shorturl.at/fGAdr">https://shorturl.at/fGAdr</a></td>
            </tr>
            <tr>
                <td>Mitul</td>
                <td>8 Years</td>
                <td>Front End Developer</td>
                <td>Tx</td>
                <td>GC</td>
                <td><a href="https://tinyurl.com/styhb3vr">https://tinyurl.com/styhb3vr</a></td>
            </tr>
            <tr>
                <td>Shonagjot</td>
                <td>8 years</td>
                <td>QA Automation</td>
                <td>Bay AreaCA</td>
                <td>GC</td>
                <td><a href="https://shorturl.at/LbkYu">https://shorturl.at/LbkYu</a></td>
            </tr>
            <tr>
                <td>SMitha</td>
                <td>8 Years</td>
                <td>QA Engineer/SDET</td>
                <td>Elk Grove Village IL</td>
                <td>H4 EAD</td>
                <td><a href="https://tinyurl.com/9u9wa98j">https://tinyurl.com/9u9wa98j</a></td>
            </tr>
            <tr>
                <td>Deepa</td>
                <td>10 Years</td>
                <td>Full Stack Developer</td>
                <td>Bay AreaCA</td>
                <td>USC</td>
                <td><a href="https://tinyurl.com/5n7y6ajf">https://tinyurl.com/5n7y6ajf</a></td>
            </tr>
            <tr>
                <td>Padmanjali</td>
                <td>8 Years</td>
                <td>Front End Developer</td>
                <td>Bay AreaCA</td>
                <td>GC</td>
                <td><a href="https://tinyurl.com/bddejrj6">https://tinyurl.com/bddejrj6</a></td>
            </tr>
            <tr>
                <td>Sarojini</td>
                <td>8 +Years</td>
                <td>Front End Developer</td>
                <td>WA</td>
                <td>GC</td>
                <td><a href="https://tinyurl.com/2s4x4d33">https://tinyurl.com/2s4x4d33</a></td>
            </tr>
            <tr>
                <td>Teena</td>
                <td>9 Years</td>
                <td>Front End Developer</td>
                <td>Bay AreaCA</td>
                <td>H4 EAD</td>
                <td><a href="https://tinyurl.com/mrwxuy4z">https://tinyurl.com/mrwxuy4z</a></td>
            </tr>
            <tr>
                <td>NImmy</td>
                <td>10 years</td>
                <td>Full Stack Developer</td>
                <td>Bay AreaCA</td>
                <td>H4 EAD</td>
                <td><a href="https://tinyurl.com/bdehuwte">https://tinyurl.com/bdehuwte</a></td>
            </tr>
            <tr>
                <td>Swathika</td>
                <td>8 years</td>
                <td>Data Engineer</td>
                <td>Bay AreaCA</td>
                <td>H4 EAD</td>
                <td><a href="https://tinyurl.com/yc5bwb5w">https://tinyurl.com/yc5bwb5w</a></td>
            </tr>
            <tr>
                <td>Yousaf</td>
                <td>8 years</td>
                <td>ML Engineer</td>
                <td>Open</td>
                <td>USC</td>
                <td><a href="https://tinyurl.com/45tyw4se">https://tinyurl.com/45tyw4se</a></td>
            </tr>
            <tr>
                <td>Fahad</td>
                <td>8 Years</td>
                <td>ML Engineer</td>
                <td>Open</td>
                <td>GC</td>
                <td><a href="https://tinyurl.com/y7x4mac3">https://tinyurl.com/y7x4mac3</a></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`;


module.exports = htmltemplet

