// Simple crawl email from website
// Fansa@IndoSec
// Ganti copyright fix anda nub

const fs = require('fs');
const {crawlEmail} = require('./indosec');
const cmd = require('commander');

cmd
	.command('crawlEmail <file>')
	.description('Crawl Email From Website')
	.action((file) => {
		var cekFile = fs.existsSync(file);
		if (cekFile == true) {
			var listSite = fs.readFileSync(file).toString();
			var split = listSite.split("\n");
			for (let i = 0; i < split.length; i++) {
				crawlEmail(split[i]);
			}
		} else {
			console.log('[!] File Notfound');
		}
	});

cmd.parse(process.argv);