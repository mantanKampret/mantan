// Simple crawl email from website
// Fansa@IndoSec
// Ganti copyright fix anda nub

const axios = require('axios');
const fs = require('fs');

const crawlEmail = (url) => {
	axios({
		method: 'GET',
		url: url,
		headers: {'Content-Type': 'text/html'}
	})
	.then(response => {
		if (response.status == 200) {
			const regex = response.data.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
			let rmMails = (regex) => regex.filter((v, i) => regex.indexOf(v) === i);
			let join = rmMails(regex).join("\n");
			fs.appendFile('mail_save.txt', join, (err) => {
				if (err) throw err;
				console.log(rmMails(regex));
			});
		} else {
			console.log('[!] Failed to connect website');
		}
	})
	.catch(error => {
		//console.log(error); // Jika ingin menampilkan pesan error
		console.log('[*] No Emails Founds From Site: ' + url);
	});
}

module.exports = {crawlEmail};