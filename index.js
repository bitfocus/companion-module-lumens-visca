var instance_skel = require('../../instance_skel');
var udp = require('../../udp');
var debug;
var log;

var PRESET = [
	{ id: '0', label: 'Preset 0' },
	{ id: '1', label: 'Preset 1' },
	{ id: '2', label: 'Preset 2' },
	{ id: '3', label: 'Preset 3' },
	{ id: '4', label: 'Preset 4' },
	{ id: '5', label: 'Preset 5' },
	{ id: '6', label: 'Preset 6' },
	{ id: '7', label: 'Preset 7' },
	{ id: '8', label: 'Preset 8' },
	{ id: '9', label: 'Preset 9' },
	{ id: 'A', label: 'Preset 10' },
	{ id: 'B', label: 'Preset 11' },
	{ id: 'C', label: 'Preset 12' },
	{ id: 'D', label: 'Preset 13' },
	{ id: 'E', label: 'Preset 14' },
	{ id: 'F', label: 'Preset 15' },
	{ id: '10', label: 'Preset 16' },
	{ id: '11', label: 'Preset 17' },
	{ id: '12', label: 'Preset 18' },
	{ id: '13', label: 'Preset 19' },
	{ id: '14', label: 'Preset 20' },
	{ id: '15', label: 'Preset 21' },
	{ id: '16', label: 'Preset 22' },
	{ id: '17', label: 'Preset 23' },
	{ id: '18', label: 'Preset 24' },
	{ id: '19', label: 'Preset 25' },
	{ id: '1A', label: 'Preset 26' },
	{ id: '1B', label: 'Preset 27' },
	{ id: '1C', label: 'Preset 28' },
	{ id: '1D', label: 'Preset 29' },
	{ id: '1E', label: 'Preset 30' },
	{ id: '1F', label: 'Preset 31' },
	{ id: '20', label: 'Preset 32' },
	{ id: '21', label: 'Preset 33' },
	{ id: '22', label: 'Preset 34' },
	{ id: '23', label: 'Preset 35' },
	{ id: '24', label: 'Preset 36' },
	{ id: '25', label: 'Preset 37' },
	{ id: '26', label: 'Preset 38' },
	{ id: '27', label: 'Preset 39' },
	{ id: '28', label: 'Preset 40' },
	{ id: '29', label: 'Preset 41' },
	{ id: '2A', label: 'Preset 42' },
	{ id: '2B', label: 'Preset 43' },
	{ id: '2C', label: 'Preset 44' },
	{ id: '2D', label: 'Preset 45' },
	{ id: '2E', label: 'Preset 46' },
	{ id: '2F', label: 'Preset 47' },
	{ id: '30', label: 'Preset 48' },
	{ id: '31', label: 'Preset 49' },
	{ id: '32', label: 'Preset 50' },
	{ id: '33', label: 'Preset 51' },
	{ id: '34', label: 'Preset 52' },
	{ id: '35', label: 'Preset 53' },
	{ id: '36', label: 'Preset 54' },
	{ id: '37', label: 'Preset 55' },
	{ id: '38', label: 'Preset 56' },
	{ id: '39', label: 'Preset 57' },
	{ id: '3A', label: 'Preset 58' },
	{ id: '3B', label: 'Preset 59' },
	{ id: '3C', label: 'Preset 60' },
	{ id: '3D', label: 'Preset 61' },
	{ id: '3E', label: 'Preset 62' },
	{ id: '3F', label: 'Preset 63' },
	{ id: '40', label: 'Preset 64' },
	{ id: '41', label: 'Preset 65' },
	{ id: '42', label: 'Preset 66' },
	{ id: '43', label: 'Preset 67' },
	{ id: '44', label: 'Preset 68' },
	{ id: '45', label: 'Preset 69' },
	{ id: '46', label: 'Preset 70' },
	{ id: '47', label: 'Preset 71' },
	{ id: '48', label: 'Preset 72' },
	{ id: '49', label: 'Preset 73' },
	{ id: '4A', label: 'Preset 74' },
	{ id: '4B', label: 'Preset 75' },
	{ id: '4C', label: 'Preset 76' },
	{ id: '4D', label: 'Preset 77' },
	{ id: '4E', label: 'Preset 78' },
	{ id: '4F', label: 'Preset 79' },
	{ id: '50', label: 'Preset 80' },
	{ id: '51', label: 'Preset 81' },
	{ id: '52', label: 'Preset 82' },
	{ id: '53', label: 'Preset 83' },
	{ id: '54', label: 'Preset 84' },
	{ id: '55', label: 'Preset 85' },
	{ id: '56', label: 'Preset 86' },
	{ id: '57', label: 'Preset 87' },
	{ id: '58', label: 'Preset 88' },
	{ id: '59', label: 'Preset 89' },
	{ id: '5A', label: 'Preset 90' },
	{ id: '5B', label: 'Preset 91' },
	{ id: '5C', label: 'Preset 92' },
	{ id: '5D', label: 'Preset 93' },
	{ id: '5E', label: 'Preset 94' },
	{ id: '5F', label: 'Preset 95' },
	{ id: '60', label: 'Preset 96' },
	{ id: '61', label: 'Preset 97' },
	{ id: '62', label: 'Preset 98' },
	{ id: '63', label: 'Preset 99' },
	{ id: '64', label: 'Preset 100' },
	{ id: '65', label: 'Preset 101' },
	{ id: '66', label: 'Preset 102' },
	{ id: '67', label: 'Preset 103' },
	{ id: '68', label: 'Preset 104' },
	{ id: '69', label: 'Preset 105' },
	{ id: '6A', label: 'Preset 106' },
	{ id: '6B', label: 'Preset 107' },
	{ id: '6C', label: 'Preset 108' },
	{ id: '6D', label: 'Preset 109' },
	{ id: '6E', label: 'Preset 110' },
	{ id: '6F', label: 'Preset 111' },
	{ id: '70', label: 'Preset 112' },
	{ id: '71', label: 'Preset 113' },
	{ id: '72', label: 'Preset 114' },
	{ id: '73', label: 'Preset 115' },
	{ id: '74', label: 'Preset 116' },
	{ id: '75', label: 'Preset 117' },
	{ id: '76', label: 'Preset 118' },
	{ id: '77', label: 'Preset 119' },
	{ id: '78', label: 'Preset 120' },
	{ id: '79', label: 'Preset 121' },
	{ id: '7A', label: 'Preset 122' },
	{ id: '7B', label: 'Preset 123' },
	{ id: '7C', label: 'Preset 124' },
	{ id: '7D', label: 'Preset 125' },
	{ id: '7E', label: 'Preset 126' },
	{ id: '7F', label: 'Preset 127' },
];
var PRESET_TR1 = [
	// { id: '0', label: 'Preset 0' },
	// { id: '1', label: 'Preset 1' },
	{ id: '2', label: 'Preset 2' },
	{ id: '3', label: 'Preset 3' },
	{ id: '4', label: 'Preset 4' },
	// { id: '5', label: 'Preset 5' },
	// { id: '6', label: 'Preset 6' },
	// { id: '7', label: 'Preset 7' },
	// { id: '8', label: 'Preset 8' },
	{ id: '9', label: 'Preset 9' },
	{ id: 'A', label: 'Preset 10' },
	{ id: 'B', label: 'Preset 11' },
	{ id: 'C', label: 'Preset 12' },
	{ id: 'D', label: 'Preset 13' },
	{ id: 'E', label: 'Preset 14' },
	{ id: 'F', label: 'Preset 15' },
	{ id: '10', label: 'Preset 16' },
	{ id: '11', label: 'Preset 17' },
	{ id: '12', label: 'Preset 18' },
	{ id: '13', label: 'Preset 19' },
	{ id: '14', label: 'Preset 20' },
	{ id: '15', label: 'Preset 21' },
	{ id: '16', label: 'Preset 22' },
	{ id: '17', label: 'Preset 23' },
	{ id: '18', label: 'Preset 24' },
	{ id: '19', label: 'Preset 25' },
	{ id: '1A', label: 'Preset 26' },
	{ id: '1B', label: 'Preset 27' },
	{ id: '1C', label: 'Preset 28' },
	{ id: '1D', label: 'Preset 29' },
	{ id: '1E', label: 'Preset 30' },
	{ id: '1F', label: 'Preset 31' },
	{ id: '20', label: 'Preset 32' },
	{ id: '21', label: 'Preset 33' },
	{ id: '22', label: 'Preset 34' },
	{ id: '23', label: 'Preset 35' },
	{ id: '24', label: 'Preset 36' },
	{ id: '25', label: 'Preset 37' },
	{ id: '26', label: 'Preset 38' },
	{ id: '27', label: 'Preset 39' },
	{ id: '28', label: 'Preset 40' },
	{ id: '29', label: 'Preset 41' },
	{ id: '2A', label: 'Preset 42' },
	{ id: '2B', label: 'Preset 43' },
	{ id: '2C', label: 'Preset 44' },
	{ id: '2D', label: 'Preset 45' },
	{ id: '2E', label: 'Preset 46' },
	{ id: '2F', label: 'Preset 47' },
	{ id: '30', label: 'Preset 48' },
	{ id: '31', label: 'Preset 49' },
	{ id: '32', label: 'Preset 50' },
	{ id: '33', label: 'Preset 51' },
	{ id: '34', label: 'Preset 52' },
	{ id: '35', label: 'Preset 53' },
	{ id: '36', label: 'Preset 54' },
	{ id: '37', label: 'Preset 55' },
	{ id: '38', label: 'Preset 56' },
	{ id: '39', label: 'Preset 57' },
	{ id: '3A', label: 'Preset 58' },
	{ id: '3B', label: 'Preset 59' },
	{ id: '3C', label: 'Preset 60' },
	{ id: '3D', label: 'Preset 61' },
	{ id: '3E', label: 'Preset 62' },
	{ id: '3F', label: 'Preset 63' },
	{ id: '40', label: 'Preset 64' },
	{ id: '41', label: 'Preset 65' },
	{ id: '42', label: 'Preset 66' },
	{ id: '43', label: 'Preset 67' },
	{ id: '44', label: 'Preset 68' },
	{ id: '45', label: 'Preset 69' },
	{ id: '46', label: 'Preset 70' },
	{ id: '47', label: 'Preset 71' },
	{ id: '48', label: 'Preset 72' },
	{ id: '49', label: 'Preset 73' },
	{ id: '4A', label: 'Preset 74' },
	{ id: '4B', label: 'Preset 75' },
	{ id: '4C', label: 'Preset 76' },
	{ id: '4D', label: 'Preset 77' },
	{ id: '4E', label: 'Preset 78' },
	{ id: '4F', label: 'Preset 79' },
	// { id: '50', label: 'Preset 80' },
	// { id: '51', label: 'Preset 81' },
	{ id: '52', label: 'Preset 82' },
	{ id: '53', label: 'Preset 83' },
	{ id: '54', label: 'Preset 84' },
	{ id: '55', label: 'Preset 85' },
	{ id: '56', label: 'Preset 86' },
	{ id: '57', label: 'Preset 87' },
	{ id: '58', label: 'Preset 88' },
	{ id: '59', label: 'Preset 89' },
	{ id: '5A', label: 'Preset 90' },
	{ id: '5B', label: 'Preset 91' },
	{ id: '5C', label: 'Preset 92' },
	{ id: '5D', label: 'Preset 93' },
	{ id: '5E', label: 'Preset 94' },
	// { id: '5F', label: 'Preset 95' },
	// { id: '60', label: 'Preset 96' },
	{ id: '61', label: 'Preset 97' },
	{ id: '62', label: 'Preset 98' },
	// { id: '63', label: 'Preset 99' },
	{ id: '64', label: 'Preset 100' },
	{ id: '65', label: 'Preset 101' },
	{ id: '66', label: 'Preset 102' },
	{ id: '67', label: 'Preset 103' },
	{ id: '68', label: 'Preset 104' },
	{ id: '69', label: 'Preset 105' },
	{ id: '6A', label: 'Preset 106' },
	{ id: '6B', label: 'Preset 107' },
	{ id: '6C', label: 'Preset 108' },
	{ id: '6D', label: 'Preset 109' },
	{ id: '6E', label: 'Preset 110' },
	{ id: '6F', label: 'Preset 111' },
	{ id: '70', label: 'Preset 112' },
	{ id: '71', label: 'Preset 113' },
	{ id: '72', label: 'Preset 114' },
	{ id: '73', label: 'Preset 115' },
	{ id: '74', label: 'Preset 116' },
	{ id: '75', label: 'Preset 117' },
	{ id: '76', label: 'Preset 118' },
	{ id: '77', label: 'Preset 119' },
	{ id: '78', label: 'Preset 120' },
	// { id: '79', label: 'Preset 121' },
	// { id: '7A', label: 'Preset 122' },
	// { id: '7B', label: 'Preset 123' },
	{ id: '7C', label: 'Preset 124' },
	{ id: '7D', label: 'Preset 125' },
	{ id: '7E', label: 'Preset 126' },
	{ id: '7F', label: 'Preset 127' },
];
var SPEED = [
	{ id: '18', label: 'Speed 24 (Fast)' },
	{ id: '17', label: 'Speed 23' },
	{ id: '16', label: 'Speed 22' },
	{ id: '15', label: 'Speed 21' },
	{ id: '14', label: 'Speed 20' },
	{ id: '13', label: 'Speed 19' },
	{ id: '12', label: 'Speed 18' },
	{ id: '11', label: 'Speed 17' },
	{ id: '10', label: 'Speed 16' },
	{ id: 'F', label: 'Speed 15' },
	{ id: 'E', label: 'Speed 14' },
	{ id: 'D', label: 'Speed 13' },
	{ id: 'C', label: 'Speed 12' },
	{ id: 'B', label: 'Speed 11' },
	{ id: 'A', label: 'Speed 10' },
	{ id: '9', label: 'Speed 09' },
	{ id: '8', label: 'Speed 08' },
	{ id: '7', label: 'Speed 07' },
	{ id: '6', label: 'Speed 06' },
	{ id: '5', label: 'Speed 05' },
	{ id: '4', label: 'Speed 04' },
	{ id: '3', label: 'Speed 03' },
	{ id: '2', label: 'Speed 02' },
	{ id: '1', label: 'Speed 01 (Slow)' }
];

var ZOOM_FOCUS_SPEED = [
	{ id: '7', label: 'Speed 07 (Fast)' },
	{ id: '6', label: 'Speed 06' },
	{ id: '5', label: 'Speed 05' },
	{ id: '4', label: 'Speed 04' },
	{ id: '3', label: 'Speed 03' },
	{ id: '2', label: 'Speed 02' },
	{ id: '1', label: 'Speed 01 (Slow)' }
];

var CAMERAID = [
	//	{ id: '128', label: 'id 0' },
	{ id: '129', label: 'id 1' },  //129 = 0x81
	{ id: '130', label: 'id 2' },
	{ id: '131', label: 'id 3' },
	{ id: '132', label: 'id 4' },
	{ id: '133', label: 'id 5' },
	{ id: '134', label: 'id 6' },
	{ id: '135', label: 'id 7' },
	{ id: '136', label: 'id 8' }
];

instance.prototype.sendVISCACommand = function (payload) {
	var self = this;
	var buf = new Buffer(32);

	// 0x01 0x00 = VISCA Command
	buf[0] = 0x01;
	buf[1] = 0x00;

	self.packet_counter = (self.packet_counter + 1) % 0xFFFFFFFF;

	buf.writeUInt16BE(payload.length, 2);
	buf.writeUInt32BE(self.packet_counter, 4);

	if (typeof payload == 'string') {
		buf.write(payload, 8, 'binary');
	} else if (typeof payload == 'object' && payload instanceof Buffer) {
		payload.copy(buf, 8);
	}

	var newbuf = buf.slice(0, 8 + payload.length);

	try {
		debug('sending', newbuf, "to", self.udp.host);
		self.udp.send(newbuf);
		console.log('\x1b[36m', ("====> To '" + self.config.label + "': ").padStart(25, ' '), newbuf.slice(8, 8 + payload.length), '\x1b[0m');	//shown in cyan

		if (self.udp.host === '') {
			var str = 'Error : IP Address of Camera "' + self.config.label + '" is blank, please click "EDIT" and fill in the correct IP.';
			console.log('\x1b[31m', str, '\x1b[0m');	//shown in red
			self.log('error', str);
		}
	} catch (error) {
		console.log('\x1b[31m', 'Error : when sending VISCA command to ', self.config.label, '\x1b[0m');	//shown in red
		console.log(error);
	}
};

instance.prototype.sendControlCommand = function (payload) {
	var self = this;
	var buf = new Buffer(32);

	// 0x01 0x00 = VISCA Command
	buf[0] = 0x02;
	buf[1] = 0x00;

	self.packet_counter = (self.packet_counter + 1) % 0xFFFFFFFF;

	buf.writeUInt16BE(payload.length, 2);
	buf.writeUInt32BE(self.packet_counter, 4);

	if (typeof payload == 'string') {
		buf.write(payload, 8, 'binary');
	} else if (typeof payload == 'object' && payload instanceof Buffer) {
		payload.copy(buf, 8);
	}

	var newbuf = buf.slice(0, 8 + payload.length);

	try {
		debug('sending', newbuf, "to", self.udp.host);
		self.udp.send(newbuf);
		console.log('\x1b[35m', ("====> To '" + self.config.label + "': ").padStart(25, ' '), "Send Control Cmd ", newbuf, '\x1b[0m');

		if (self.udp.host === '') {
			var str = 'Error : IP Address of Camera "' + self.config.label + '" is blank, please click "EDIT" and fill in the correct IP.';
			console.log('\x1b[31m', str, '\x1b[0m');	//shown in red
			self.log('error', str);
		}
	} catch (error) {
		console.log('\x1b[31m', 'Error : when sending Control command to ', self.config.label, '\x1b[0m');	//shown in red
		console.log(error);
	}
};

function instance(system, id, config) {
	var self = this;

	// super-constructor
	instance_skel.apply(this, arguments);

	return self;
}

instance.prototype.init_udp = function () {
	var self = this;

	if (self.udp !== undefined) {
		self.udp.destroy();
		delete self.udp;
	}

	if (self.config.host !== undefined) {
		self.udp = new udp(self.config.host, self.config.port);

		// Reset sequence number
		self.sendControlCommand('\x01');
		self.packet_counter = 0;

		self.udp.on('status_change', function (status, message) {
			self.status(status, message);
		});
		self.udp.on('data', function (data) {
			console.log(("    <== From '" + self.config.label + "': ").padStart(25, ' '), data);
		});

		debug(self.udp.host, ':', self.config.port);
	}
};

instance.prototype.init = function (appEnv) {
	var self = this;

	debug = self.debug;
	log = self.log;

	self.appEnv = appEnv || null;
	self.status(self.STATUS_UNKNOWN);
	self.init_udp();
	self.actions(); // export actions
	self.init_presets();

	//set device address/id to camera  88 30 0p FF, p = device 1~7
	cmd = '\x88\x30' + String.fromCharCode(parseInt(self.config.id) - 128) + '\xFF';
	self.sendVISCACommand(cmd);
};

instance.prototype.updateConfig = function (config) {
	var self = this;
	self.config = config;
	self.init_presets();

	if (self.udp !== undefined) {
		self.udp.destroy();
		delete self.udp;
	}

	self.status(self.STATUS_UNKNOWN);

	if (self.config.host !== undefined) {
		self.udp = new udp(self.config.host, self.config.port);

		self.udp.on('status_change', function (status, message) {
			self.status(status, message);
		});
	}
};

// Return config fields for web config
instance.prototype.config_fields = function () {
	var self = this;

	return [
		{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: `
				<div class="alert alert-danger">
					<h3>Lumens : 「We Make Your Job Easier」 !</h3>
						This module controls LUMENS cameras with VISCA over IP protocol.
						<br>
						For more details about Lumens Camera, please refer to... 
						<br>
						<a href="https://www.mylumens.com/en/Products" target="_new" class="btn btn-warning mr-1">Lumens Camera info.</a>				
					<br><br><br>
					<h4>the product you choose : "${self.config.product}",</h4>
					<h4>Please fill in the IP below Now </h4>
				</div>
			`
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP (for example : 192.168.4.54)',
			width: 6,
			regex: self.REGEX_IP
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'Target PORT (default : 52381)',
			width: 6,
			regex: self.REGEX_PORT,
			default: '52381'
		},
		{
			type: 'dropdown',
			id: 'id',
			label: 'LUMENS Camera Address (factory setting : id 1)',
			width: 6,
			default: '129',
			choices: CAMERAID
		}
	]
};

// When module gets deleted
instance.prototype.destroy = function () {
	var self = this;

	if (self.udp !== undefined) {
		self.udp.destroy();
	}
	debug("destroy", self.id);
};

instance.prototype.init_presets = function () {
	var self = this;
	var presets = [];
	//=============== Save / Recall	Preset catalog =================
	var index;
	for (index = 1; index < 33; index++) {
		if ((self.config.product !== 'Tracking Camera') || ((index !== 1) && (index !== 5) && (index !== 6) && (index !== 7) && (index !== 8))) {
			presets.push({
				category: 'Save Preset',
				label: 'Save Preset ' + parseInt(index),
				bank: {
					style: 'text',
					text: 'SAVE\\nPSET\\n' + parseInt(index),
					size: '14',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'savePset',
						options: {
							val: index.toString(16).toUpperCase(),
						}
					}
				]
			});
			presets.push({
				category: 'Recall Preset',
				label: 'Recall Preset ' + parseInt(index),
				bank: {
					style: 'text',
					text: 'Recall\\nPSET\\n' + parseInt(index),
					size: '14',
					color: '16777215',
					bgcolor: self.rgb(0, 0, 0),
				},
				actions: [
					{
						action: 'recallPset',
						options: {
							val: index.toString(16).toUpperCase(),
						}
					}
				]
			});
		}
	}

	var presets_default = [
		//=============== System catalog =================
		{
			category: 'System',
			label: 'Power On',
			bank: {
				style: 'text',
				text: 'Power\\nON',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'powerOn',
				}
			]
		},
		{
			category: 'System',
			label: 'Power Off',
			bank: {
				style: 'text',
				text: 'Power\\nOFF',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'powerOff',
				}
			]
		},
		//=============== Lens catalog =================
		{
			category: 'Lens',
			label: 'Zoom In',
			bank: {
				style: 'text',
				text: 'ZOOM\\nIN',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'zoomI',
					options: { speed: '3' },
				}
			],
			release_actions: [
				{
					action: 'zoomS',
				}
			]
		},
		{
			category: 'Lens',
			label: 'Zoom Out',
			bank: {
				style: 'text',
				text: 'ZOOM\\nOUT',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'zoomO',
					options: { speed: '3' },
				}
			],
			release_actions: [
				{
					action: 'zoomS',
				}
			]
		},
		{
			category: 'Lens',
			label: 'Focus Far',
			bank: {
				style: 'text',
				text: 'FOCUS\\nFAR',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'focusM_MF',
				},
				{
					action: 'focusF',
					options: { speed: '1' },
					delay: '50',
				}
			],
			release_actions: [
				{
					action: 'focusS',
				}
			]
		},
		{
			category: 'Lens',
			label: 'Focus Near',
			bank: {
				style: 'text',
				text: 'FOCUS\\nNEAR',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'focusM_MF',
				},
				{
					action: 'focusN',
					options: { speed: '1' },
					delay: '50',
				}
			],
			release_actions: [
				{
					action: 'focusS',
				}
			]
		},
		{
			category: 'Lens',
			label: 'Auto Focus',
			bank: {
				style: 'text',
				text: 'AUTO\\nFOCUS',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'focusM_AF',
				}
			]
		},
		{
			category: 'Lens',
			label: 'One Push Auto Focus',
			bank: {
				style: 'text',
				text: 'One Push\\nAF',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'focusM_MF',
				},
				{
					action: 'focusOpaf',
					delay: '50',
				}
			]
		},
		//=============== Exposure catalog =================
		{
			category: 'Exposure',
			label: 'Exposure Full Auto',
			bank: {
				style: 'text',
				text: 'Expos.\\nAuto',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
				// latch: true
			},
			actions: [
				{
					action: 'expModeAuto',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Exposure Manual',
			bank: {
				style: 'text',
				text: 'Expos.\\nManual',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
				// latch: true
			},
			actions: [
				{
					action: 'expModeManu',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Exposure Shutter Priority',
			bank: {
				style: 'text',
				text: 'Shutter\\nPri.',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
				// latch: true
			},
			actions: [
				{
					action: 'expModeShutterPri',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Exposure Iris Priority',
			bank: {
				style: 'text',
				text: 'Iris\\nPri.',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'expModeIrisPri',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Shutter Up',
			bank: {
				style: 'text',
				text: 'Shutter\\nUP',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				// {
				// 	action: 'expModeManu',
				// },
				{
					action: 'shutU',
					// delay: '50',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Shutter Down',
			bank: {
				style: 'text',
				text: 'Shutter\\nDOWN',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				// {
				// 	action: 'expModeManu',
				// },
				{
					action: 'shutD',
					// delay: '50',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Iris Up',
			bank: {
				style: 'text',
				text: 'IRIS\\nUP',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				// {
				// 	action: 'expModeIrisPri',
				// },
				{
					action: 'irisU',
					// 	delay: '50',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Iris Down',
			bank: {
				style: 'text',
				text: 'IRIS\\nDOWN',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				// {
				// 	action: 'expModeIrisPri',
				// },
				{
					action: 'irisD',
					// 	delay: '50',
				}
			]
		},
		//=============== White Balance catalog =================
		{
			category: 'White Balance',
			label: 'White Balance - Auto',
			bank: {
				style: 'text',
				text: 'WB\\nAuto',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'wbModeAuto',
				}
			]
		},
		{
			category: 'White Balance',
			label: 'White Balance - One Push WB',
			bank: {
				style: 'text',
				text: 'One Push\\nWB',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'wbModeOnePush',
				},
				{
					action: 'onePushWB',
					delay: '50',
				}
			]
		},
		{
			category: 'White Balance',
			label: 'White Balance - R Gain Up',
			bank: {
				style: 'text',
				text: 'R Gain\\nUP',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'wbModeManual',
				},
				{
					action: 'wbRGainU',
					delay: '50',
				}
			]
		},
		{
			category: 'White Balance',
			label: 'White Balance - R Gain Down',
			bank: {
				style: 'text',
				text: 'R Gain\\nDOWN',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'wbModeManual',
				},
				{
					action: 'wbRGainD',
					delay: '50',
				}
			]
		},
		{
			category: 'White Balance',
			label: 'White Balance - B Gain Up',
			bank: {
				style: 'text',
				text: 'B Gain\\nUP',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'wbModeManual',
				},
				{
					action: 'wbBGainU',
					delay: '50',
				}
			]
		},
		{
			category: 'White Balance',
			label: 'White Balance - B Gain Down',
			bank: {
				style: 'text',
				text: 'B Gain\\nDOWN',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'wbModeManual',
				},
				{
					action: 'wbBGainD',
					delay: '50',
				}
			]
		},
	];

	const System_NotSupportPreset_1 = (self.config.product !== "Tracking Camera") ? [
		{
			category: 'System',
			label: 'Tally Off',
			bank: {
				style: 'text',
				text: 'Tally\\nOFF',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'tallyLampOff',
				}
			]
		},
		{
			category: 'System',
			label: 'Tally Mode - Red',
			bank: {
				style: 'text',
				text: 'Tally\\nRed ON',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'tallyLampOn',
				},
				{
					action: 'tallyModeRed',
					delay: '50',
				}
			]
		},
	] : [];

	const System_NotSupportPreset_2 = ((self.config.product !== "Box Camera") && (self.config.product !== "Tracking Camera")) ? [
		{
			category: 'System',
			label: 'Tally Mode - Green',
			bank: {
				style: 'text',
				text: 'Tally\\nGreen ON',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'tallyLampOn',
				},
				{
					action: 'tallyModeGreen',
					delay: '50',
				}
			]
		},
	] : [];

	const Exp_NotSupportPreset = self.config.product !== "Tracking Camera" ? [
		//=============== Exposure catalog =================
		{
			category: 'Exposure',
			label: 'Gain Up',
			bank: {
				style: 'text',
				text: 'GAIN\\nUP',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'expModeManu',
				},
				{
					action: 'gainU',
					delay: '50',
				}
			]
		},
		{
			category: 'Exposure',
			label: 'Gain Down',
			bank: {
				style: 'text',
				text: 'GAIN\\nDOWN',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'expModeManu',
				},
				{
					action: 'gainD',
					delay: '50',
				}
			]
		},
	] : [];

	const PT_NotSupportPreset = (self.config.product !== "Box Camera") ? [
		//=============== Pan/Tilt Catalog =================
		{
			category: 'Pan/Tilt',
			label: 'UP',
			bank: {
				style: 'png',
				text: '',
				png64: image_up,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'up',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'DOWN',
			bank: {
				style: 'png',
				text: '',
				png64: image_down,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'down',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'LEFT',
			bank: {
				style: 'png',
				text: '',
				png64: image_left,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'left',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'RIGHT',
			bank: {
				style: 'png',
				text: '',
				png64: image_right,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'right',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'UP LEFT',
			bank: {
				style: 'png',
				text: '',
				png64: image_up_left,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'upLeft',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'UP RIGHT',
			bank: {
				style: 'png',
				text: '',
				png64: image_up_right,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'upRight',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'DOWN LEFT',
			bank: {
				style: 'png',
				text: '',
				png64: image_down_left,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'downLeft',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'DOWN RIGHT',
			bank: {
				style: 'png',
				text: '',
				png64: image_down_right,
				pngalignment: 'center:center',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'downRight',
					options: { panSpeed: 'C', tiltSpeed: 'C' },
				}
			],
			release_actions: [
				{
					action: 'stop',
				}
			]
		},
		{
			category: 'Pan/Tilt',
			label: 'Home',
			bank: {
				style: 'text',
				text: 'HOME',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0)
			},
			actions: [
				{
					action: 'home',
				}
			]
		},
	] : [];

	const Image_NotSupportPreset = self.config.product !== 'Tracking Camera' ? [
		//=============== Image catalog =================
		{
			category: 'Image',
			label: 'Image Mode - Default',
			bank: {
				style: 'text',
				text: 'Default\\nImage',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'imageModeDefault',
				}
			]
		},
		{
			category: 'Image',
			label: 'Brightness Up',
			bank: {
				style: 'text',
				text: 'Brightness\\nUP',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'imageModeCustom',
				},
				{
					action: 'brightU',
					delay: '50',
				}
			]
		},
		{
			category: 'Image',
			label: 'Brightness Down',
			bank: {
				style: 'text',
				text: 'Brightness\\nDOWN',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'imageModeCustom',
				},
				{
					action: 'brightD',
					delay: '50',
				}
			]
		},
		{
			category: 'Image',
			label: 'Sharpness Up',
			bank: {
				style: 'text',
				text: 'Sharpness\\nUP',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'sharpU',
				}
			]
		},
		{
			category: 'Image',
			label: 'Sharpness Down',
			bank: {
				style: 'text',
				text: 'Sharpness\\nDOWN',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'sharpD',
				}
			]
		},
	] : [];

	const DigEffect_NotSupportPreset = (self.config.product !== 'Tracking Camera') ? [
		{
			category: 'Dig-Effect',
			label: 'Mirror On',
			bank: {
				style: 'text',
				text: 'MIRROR\\nON',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'mirrorOn',
				}
			]
		},
		{
			category: 'Dig-Effect',
			label: 'Mirror Off',
			bank: {
				style: 'text',
				text: 'MIRROR\\nOFF',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'mirrorOff',
				}
			]
		},
		{
			category: 'Dig-Effect',
			label: 'Flip On',
			bank: {
				style: 'text',
				text: 'FLIP\\nON',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'flipOn',
				}
			]
		},
		{
			category: 'Dig-Effect',
			label: 'Flip Off',
			bank: {
				style: 'text',
				text: 'FLIP\\nOFF',
				size: '18',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'flipOff',
				}
			]
		},
		{
			category: 'Dig-Effect',
			label: 'Mirror+Flip On',
			bank: {
				style: 'text',
				text: 'MIRROR\\nFLIP\\nON',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'mirrorFlipOn',
				}
			]
		},
		{
			category: 'Dig-Effect',
			label: 'Mirror+Flip Off',
			bank: {
				style: 'text',
				text: 'MIRROR\\nFLIP\\nOFF',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'mirrorFlipOff',
				}
			]
		},
	] : [];

	const AutoTracking_NotSupportPreset = ((self.config.product !== 'PTZ Camera') && (self.config.product !== 'Box Camera')) ? [
		//=============== Auto-Tracking catalog =================
		{
			category: 'Auto Tracking',
			label: 'Auto-Tracking On',
			bank: {
				style: 'text',
				text: 'Tracking\\nON',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'autoTrackingOn',
				}
			]
		},
		{
			category: 'Auto Tracking',
			label: 'Auto-Tracking Off',
			bank: {
				style: 'text',
				text: 'Tracking\\nOFF',
				size: '14',
				color: '16777215',
				bgcolor: self.rgb(0, 0, 0),
			},
			actions: [
				{
					action: 'autoTrackingOff',
				}
			]
		},
	] : [];


	Array.prototype.push.apply(presets, presets_default);
	Array.prototype.push.apply(presets, System_NotSupportPreset_1);
	Array.prototype.push.apply(presets, System_NotSupportPreset_2);
	Array.prototype.push.apply(presets, Exp_NotSupportPreset);
	Array.prototype.push.apply(presets, PT_NotSupportPreset);
	Array.prototype.push.apply(presets, Image_NotSupportPreset);
	Array.prototype.push.apply(presets, DigEffect_NotSupportPreset);
	Array.prototype.push.apply(presets, AutoTracking_NotSupportPreset);

	self.setPresetDefinitions(presets);
};

instance.prototype.actions = function (system) {
	var self = this;

	const System_NotSupportActions_1 = (self.config.product !== 'Tracking Camera') ? {
		'tallyModeRed': { label: 'Tally Mode - Red' },
	} : {}

	const System_NotSupportActions_2 = ((self.config.product !== 'Box Camera') && (self.config.product !== 'Tracking Camera')) ? {
		'tallyModeGreen': { label: 'Tally Mode - Green' },
		'tallyModeYellow': { label: 'Tally Mode - Yellow' },
	} : {}

	const System_NotSupportActions_3 = (self.config.product !== 'Tracking Camera') ? {
		'tallyLampOn': { label: 'Tally Lamp On' },
		'tallyLampOff': { label: 'Tally Lamp Off' },
	} : {}

	const PToptions = {
		options: [
			{
				type: 'dropdown',
				label: 'Pan Speed Setting',
				id: 'panSpeed',
				default: 'C',
				choices: SPEED
			},
			{
				type: 'dropdown',
				label: 'Tilt Speed Setting',
				id: 'tiltSpeed',
				default: 'C',
				choices: SPEED
			}
		]
	}

	const PT_NotSupportActions = (self.config.product !== "Box Camera") ? {
		//=============== Pan/Tilt Catalog =================
		'up': { label: 'Tilt Up', ...PToptions },
		'down': { label: 'Tilt Down', ...PToptions },
		'left': { label: 'Pan Left', ...PToptions },
		'right': { label: 'Pan Right', ...PToptions },
		'upLeft': { label: 'Pan-Tilt_UpLeft', ...PToptions },
		'upRight': { label: 'Pan-Tilt_UpRight', ...PToptions },
		'downLeft': { label: 'Pan-Tilt_DownLeft', ...PToptions },
		'downRight': { label: 'Pan-Tilt_DownRight', ...PToptions },
		'stop': { label: 'Pan-Tilt_Stop', },
		'home': { label: 'Pan-Tilt_Home' },
		'reset': { label: 'Pan-Tilt_Reset' },
	} : {}


	const zoomFocusOptions = {
		options: [
			{
				type: 'dropdown',
				label: 'Speed Setting',
				id: 'speed',
				default: '3',
				choices: ZOOM_FOCUS_SPEED
			},
		]
	}


	const Exp_NotSupportActions = (self.config.product !== "Tracking Camera") ? {
		//=============== Exposure catalog =================
		'gainU': { label: 'Gain Up' },
		'gainD': { label: 'Gain Down' },
		'expCompOn': { label: 'Exposure Compensation On' },
		'expCompOff': { label: 'Exposure Compensation Off' },
	} : {}

	const Image_NotSupportActions = (self.config.product !== "Tracking Camera") ? {
		//=============== Image catalog =================
		'imageModeDefault': { label: 'Image Mode - Default' },
		'imageModeCustom': { label: 'Image Mode - Custom' },
		'brightU': { label: 'Bright Up' },
		'brightD': { label: 'Bright Down' },
		'sharpU': { label: 'Sharpness Up' },
		'sharpD': { label: 'Sharpness Down' },
	} : {}

	const DigEffect_NotSupportActions = (self.config.product !== 'Tracking Camera') ? {
		//=============== Dig-Effect catalog =================
		'mirrorOn': { label: 'Mirror On' },
		'mirrorOff': { label: 'Mirror Off' },
		'flipOn': { label: 'Flip On' },
		'flipOff': { label: 'Flip Off' },
		'mirrorFlipOn': { label: 'Mirror + Flip On' },
		'mirrorFlipOff': { label: 'Mirror + Flip Off' },
	} : {}

	const AutoTracking_NotSupportActions = ((self.config.product !== 'Box Camera') && (self.config.product !== 'PTZ Camera')) ? {
		'autoTrackingOn': { label: 'Auto Tracking On' },
		'autoTrackingOff': { label: 'Auto Tracking Off' },
	} : {}

	const Preset_SupportActions = (self.config.product !== 'Tracking Camera') ? {
		//=============== Save / Recall	Preset catalog =================
		'savePset': {
			label: 'Save Preset',
			options: [
				{
					type: 'dropdown',
					label: 'Preset Nr.',
					id: 'val',
					choices: PRESET
				}
			]
		},
		'recallPset': {
			label: 'Recall Preset',
			options: [
				{
					type: 'dropdown',
					label: 'Preset Nr.',
					id: 'val',
					choices: PRESET
				}
			]
		},
	} : {
			'savePset': {
				label: 'Save Preset',
				options: [
					{
						type: 'dropdown',
						label: 'Preset Nr.',
						id: 'val',
						choices: PRESET_TR1
					}
				]
			},
			'recallPset': {
				label: 'Recall Preset',
				options: [
					{
						type: 'dropdown',
						label: 'Preset Nr.',
						id: 'val',
						choices: PRESET_TR1
					}
				]
			},
		}

	const btnActions = {
		//=============== System catalog =================
		'powerOn': { label: 'Power On' },
		'powerOff': { label: 'Power Off' },
		'menuOnOff': { label: 'Menu On/Off Toggle' },
		'menuEnter': { label: 'Menu Enter' },
		'menuUp': { label: 'Menu Up' },
		'menuDown': { label: 'Menu Down' },
		'menuLeft': { label: 'Menu Left' },
		'menuRight': { label: 'Menu Right' },
		...System_NotSupportActions_1,
		...System_NotSupportActions_2,
		...System_NotSupportActions_3,

		//=============== Pan/Tilt Catalog =================
		...PT_NotSupportActions,

		//=============== Lens catalog =================
		'zoomS': { label: 'Zoom Stop' },
		'zoomI': { label: 'Zoom In', ...zoomFocusOptions },
		'zoomO': { label: 'Zoom Out', ...zoomFocusOptions },
		'focusS': { label: 'Focus Stop' },
		'focusF': { label: 'Focus Far', ...zoomFocusOptions },
		'focusN': { label: 'Focus Near', ...zoomFocusOptions },
		'focusM_AF': { label: 'Auto Focus Mode' },
		'focusM_MF': { label: 'Manual Focus Mode' },
		'focusOpaf': { label: 'One Push Auto Focus' },

		//=============== Exposure catalog =================
		'expModeAuto': { label: 'Exposure Mode - Auto' },
		'expModeManu': { label: 'Exposure Mode - Manual' },
		'expModeShutterPri': { label: 'Exposure Mode - Shutter Priority' },
		'expModeIrisPri': { label: 'Exposure Mode - Iris Priority' },
		'shutU': { label: 'Shutter Up' },
		'shutD': { label: 'Shutter Down' },
		'irisU': { label: 'Iris Up' },
		'irisD': { label: 'Iris Down' },
		...Exp_NotSupportActions,
		'expCompUp': { label: 'Exposure Compensation Up' },
		'expCompDown': { label: 'Exposure Compensation Down' },
		'backLightOn': { label: 'BackLight On' },
		'backLightOff': { label: 'BackLight Off' },

		//=============== White Balance catalog =================
		'wbModeAuto': { label: 'White Balance Mode - Auto' },
		'wbModeOnePush': { label: 'White Balance Mode - One Push' },
		'wbModeManual': { label: 'White Balance Mode - Manual' },
		'onePushWB': { label: 'One Push WB' },
		'wbRGainU': { label: 'WB Red GAIN Up' },
		'wbRGainD': { label: 'WB Red GAIN Down' },
		'wbBGainU': { label: 'WB Blue GAIN Up' },
		'wbBGainD': { label: 'WB Blue GAIN Down' },

		//=============== Image catalog =================
		...Image_NotSupportActions,

		//=============== Save / Recall	Preset catalog =================
		...Preset_SupportActions,

		//=============== Dig-Effect catalog =================
		...DigEffect_NotSupportActions,

		//=============== Auto-Tracking catalog ===============
		...AutoTracking_NotSupportActions
	}
	self.system.emit('instance_actions', self.id, btnActions);
}

instance.prototype.action = function (action) {
	var self = this;
	var opt = action.options;
	var cmd = '';

	switch (action.action) {
		//=============== System catalog ===============
		case 'powerOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x00\x02\xFF';
			break;

		case 'powerOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x00\x03\xFF';
			break;

		case 'menuOnOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x06\x10\xFF';
			break;

		case 'menuEnter':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x7E\x01\x02\x00\x01\xFF';
			break;

		case 'menuUp':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01\x01\x01\x03\x01\xFF';
			break;

		case 'menuDown':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01\x01\x01\x03\x02\xFF';
			break;

		case 'menuLeft':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01\x01\x01\x01\x03\xFF';
			break;

		case 'menuRight':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01\x01\x01\x02\x03\xFF';
			break;

		case 'tallyModeRed':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x7E\x01\x0A\x01\x05\xFF';
			break;

		case 'tallyModeGreen':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x7E\x01\x0A\x01\x06\xFF';
			break;

		case 'tallyModeYellow':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x7E\x01\x0A\x01\x07\xFF';
			break;

		case 'tallyLampOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x7E\x01\x0A\x00\x02\xFF';
			break;

		case 'tallyLampOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x7E\x01\x0A\x00\x03\xFF';
			break;

		//=============== Pan/Tilt Catalog ===============
		case 'left':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x01\x03\xFF';
			break;

		case 'right':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x02\x03\xFF';
			break;

		case 'up':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x03\x01\xFF';
			break;

		case 'down':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x03\x02\xFF';
			break;

		case 'upLeft':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x01\x01\xFF';
			break;

		case 'upRight':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x02\x01\xFF';
			break;

		case 'downLeft':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x01\x02\xFF';
			break;

		case 'downRight':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01' + String.fromCharCode(parseInt(opt.panSpeed, 16) & 0xFF) + String.fromCharCode(parseInt(opt.tiltSpeed, 16) & 0xFF) + '\x02\x02\xFF';
			break;

		case 'stop':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x01\x01\x01\x03\x03\xFF';
			break;

		case 'home':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x04\xFF';
			break;

		case 'reset':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x06\x05\xFF';
			break;

		//=============== Lens catalog ===============
		case 'zoomS':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x07\x00\xFF';
			break;

		case 'zoomI': //tele    
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x07' + String.fromCharCode(0x20 + (parseInt(opt.speed, 16) & 0x0F)) + '\xFF';
			break;

		case 'zoomO': //wide                                    
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x07' + String.fromCharCode(0x30 + (parseInt(opt.speed, 16) & 0x0F)) + '\xFF';
			break;

		case 'focusS':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x08\x00\xFF';
			break;

		case 'focusF':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x08' + String.fromCharCode(0x20 + (parseInt(opt.speed, 16) & 0x0F)) + '\xFF';
			break;

		case 'focusN':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x08' + String.fromCharCode(0x30 + (parseInt(opt.speed, 16) & 0x0F)) + '\xFF';
			break;

		case 'focusM_AF':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x38\x02\xFF';
			break;

		case 'focusM_MF':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x38\x03\xFF';
			break;

		case 'focusOpaf':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x18\x01\xFF';
			break;

		//=============== Exposure catalog ===============
		case 'expModeAuto':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x39\x00\xFF';
			break;

		case 'expModeManu':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x39\x03\xFF';
			break;

		case 'expModeShutterPri':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x39\x0A\xFF';
			break;

		case 'expModeIrisPri':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x39\x0B\xFF';
			break;

		case 'shutU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0A\x02\xFF';
			break;

		case 'shutD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0A\x03\xFF';
			break;

		case 'irisU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0B\x02\xFF';
			break;

		case 'irisD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0B\x03\xFF';
			break;

		case 'gainU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0C\x02\xFF';
			break;

		case 'gainD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0C\x03\xFF';
			break;

		case 'expCompOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3E\x02\xFF';
			break;

		case 'expCompOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3E\x03\xFF';
			break;

		case 'expCompUp':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0E\x02\xFF';
			break;

		case 'expCompDown':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0E\x03\xFF';
			break;

		case 'backLightOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x33\x02\xFF';
			break;

		case 'backLightOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x33\x03\xFF';
			break;

		//=============== White Balance catalog ===============
		case 'wbModeAuto':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x35\x00\xFF';
			break;

		case 'wbModeOnePush':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x35\x03\xFF';
			break;

		case 'wbModeManual':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x35\x05\xFF';
			break;

		case 'onePushWB':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x10\x05\xFF';
			break;

		case 'wbRGainU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x03\x02\xFF';
			break;

		case 'wbRGainD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x03\x03\xFF';
			break;

		case 'wbBGainU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x04\x02\xFF';
			break;

		case 'wbBGainD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x04\x03\xFF';
			break;

		//=============== Image catalog ===============
		case 'imageModeDefault':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3F\x04\x00\xFF';
			break;

		case 'imageModeCustom':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3F\x04\x01\xFF';
			break;

		case 'brightU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0D\x02\xFF';
			break;

		case 'brightD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x0D\x03\xFF';
			break;

		case 'sharpU':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x02\x02\xFF';
			break;

		case 'sharpD':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x02\x03\xFF';
			break;

		//=============== Save / Recall	Preset catalog ===============
		case 'savePset':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3F\x01' + String.fromCharCode(parseInt(opt.val, 16) & 0xFF) + '\xFF';
			break;

		case 'recallPset':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3F\x02' + String.fromCharCode(parseInt(opt.val, 16) & 0xFF) + '\xFF';
			break;

		//=============== Dig-Effect catalog ===============
		case 'mirrorOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x61\x02\xFF';
			break;

		case 'mirrorOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x61\x03\xFF';
			break;

		case 'flipOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x66\x02\xFF';
			break;

		case 'flipOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x66\x03\xFF';
			break;

		case 'mirrorFlipOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x67\x02\xFF';
			break;

		case 'mirrorFlipOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x67\x03\xFF';
			break;

		//=============== Auto-Tracking catalog ===============
		case 'autoTrackingOn':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3F\x02\x50\xFF';
			break;

		case 'autoTrackingOff':
			cmd = String.fromCharCode(parseInt(self.config.id)) + '\x01\x04\x3F\x02\x51\xFF';
			break;

	}
	self.sendVISCACommand(cmd);
};

instance_skel.extendedBy(instance);

// Variables for Base64 image data do not edit
var image_up = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIFJREFUKM+90EEKgzAQRmFDFy49ghcp5FquVPBighcRegHBjWDJ68D8U6F7m00+EnhkUlW3ru6rdyCV0INQzSg1zFLLKmU2aeCQQMEEJXIQORRsTLNyKJhNm3IoaPBg4mQorp2Mh1+00kKN307o/bZrpt5O/FlPU/c75X91/fPd6wPRD1eHyHEL4wAAAABJRU5ErkJggg==';

var image_down = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIlJREFUKM/F0DEOwyAMBVAjDxk5Qo7CtdiClIv1KJF6gUpZIhXxY2zTDJ2benoS8LFN9MsKbYjxF2XRS1UZ4bCeGFztFmNqphURpidm146kpwFvLDYJpPQtLSLNoySyP2bRpoqih2oSFW8K3lYAxmJGXA88XMnjeuDmih7XA8vXvNeeqX6U6aY6AacbWAQNWOPUAAAAAElFTkSuQmCC';

var image_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUKM+1kTEOgCAQBM9Q2JjwA/mJPA2fxlN4giWF8TRBBhMpbKSaZie3i8gPb4Y8FNZKGm8YIAONkNWacIruQLejy+gyug1dQhfRqZa0v6gYA6QfqSWapZnto1B6XdUuFaVHoJunr2MD21nIdJYUEhLYfoGmP777BKKIXC0eYSD5AAAAAElFTkSuQmCC';

var image_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHhJREFUKM+10LERgCAMQFE4CktHcBRWcRMYzVEcwdKCI+od+fGksVCq3/AuiXOfvZnaNXzRClVrEKtMLdSqP2RTRQAFMAFGwAlw7MAk0sAzGnhVoerLKg/F5Pv4NoFNZZNGpk9sxJYeLsDdL5T7S8IFOM/R3OZ+fQeQZV9pMy+bVgAAAABJRU5ErkJggg==';

var image_up_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABhlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+X02G5AAAAgXRSTlMAAte32QZhZx7d+TywDTf8/d5VstYPOxULNvKmSY8TFBrxyeGCluJeELQ5uw7ULND4BedlKuv2P/vDA8UgCk30WO41s8+5X8dABAz6QhHVaR156JpPnihSfTJDNOMBm4bzSICqr23NsRjcGRbtjTCS2lzsOmyu9+WLKb2fTL8+RPDhqO4yAAABfElEQVRYw+3WZW/CUBQG4AO0FBsOwwcMm7sLc3d3d3e388/HGGs7lpD0tsm+9P3S5CT3SdPec+8BkCNHzv9FAVAAEABYdQDkA7jo9GNUIDMBzstb5vr0/Gx8Z35zOjI36R2xbu+619eWa2xCoK0FClF5h1cWxDHEwilEOyLlQc8hokoAlMRcESBh7siQlJBWKkijNaHuPrWBED9iYiDQ7Pv1D4Z4/DXyFo2JgeAghQEkEgAvT6IgNo/PIUmgd62oj80mqEIpINoXRkmg2j2UBDIWVXKLTSXEUIOF/xbV5aRQsJvvUOoqMqjZZ+c7FcX8ThYCtTbxHV0fkEGDA73D3Dpzi/6rWEYAdSn579PZ/t3IBJChkef0dLRlHXdkJ6TSmSnmiYPq1LQIiGHX9BvZYinJ7/+R6q1czUG0j9KSOTxDc6UhshZhMIQrS78mncwZtzErrNcYL6V2Zd0tJ6i7QFtAYPcvHv25W6J+/Y3BrRA/x6WGuGN5mpUjhyyfsGtrpKE95HoAAAAASUVORK5CYII=';

var image_down_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABXFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9jYfXuAAAAc3RSTlMAQ98Ox1j9gAtRNTqBPfgu9p/MTQ+G1Qfx7Y0VBYyJgjkGd3ysU+Zz1IQvMM20PgwBp8Mi4TSUiDvlPxylsaF2WfcjJh0S+wLzQLmY4l/ovX3ra1rPLAOSKa4RUEvgcZwbFHqPzodGbX7qPMvCtsEq1laguT+HEwAAAVlJREFUWMPt1sduwkAQgOGxDfFCIITe0nvvvZHee++992TeX4pJQIC9hPWaQ6T41x6skfY7WGPJAGZm/6qgZjIH4AMgOp2Lq32batTkdW/trPt9+qC70DVmSKS2BXF7A1fX9DDnN2FUSpe8y5hID3SZuJMmrcwmoSFm5vD0BDWSNTnCUmZoD1PZtJCDGfIgRUpBMjPkR4rEAwUtFIkHAkKRuCCaxAdRJE5IK/FCGumWF1JLEW5ILfFD2ST9UBaJA6JLPBCQ57xAJcp5NQbtSgBReJSsH8QI5No8ODo+u397ecL3T35IGhcRA4jig8E9qmjAX2OGnAV5ggrxr0ELOaByVmg6B1TGvEYyTvxcKUaMv/ii7xN/VAZYY2dfSHkkPOYY7Kpf7OmLzLfGPIFGd6izWrRUjdYt9Xfo+ULsLpgRKqGtGyadAEIUmnuhXSAwMAXD5j+omZlZRl+X30CWTm2dHwAAAABJRU5ErkJggg==';

var image_up_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABLFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PVkEkAAAAY3RSTlMAAQ/6Uc0OEAvHTzL7TcudsMHvdwnfUwMcG8UGiIfTrIkg9QI+/ZTDe460km73LNovCo1vQUuR4Lwk45/OK+3UERTkekziZlSK8QQnoOsFaaXmLqOylvPZLYDRZTUWUpiTDfAuEmiSAAABUklEQVRYw+3WZ2+DMBAG4EtTygrQ7NHsJt1777333vv+/38o6gIMSo0dqf3AK1lIZ/mRjPEJgCBBgvxtQr8WqDKbCiWUG1AnYXU7C7UJqKQSR5oKQwqIPphsYW24nEPjJCYXilf9F+G+qeTmThTP5w8X8gK9NLqOGMGPhD8fdXtBkGihlmlsmF5aqK2xg9FmQe3/DupuEhTpoT41z/V1HVHfxWRRo/6ORBfyjILx9mRo+2MDlS3ggF5q4uP9qzmVNjfOA+EDdDLcWA8IW6FJEJPkCbFI3hCDZEFVPsmC7mQuyYJ0iUuyIAG4JDvEJTkgHskJcUgExC6RECmxQ4REDa24ILsU6wL/rfYHskmX9C87Pfi9aA5cUmnRx/kffDmncSCkat7X342KSzOIuesNR1WSl7GU8Xfbbs9Gyoo0TvRp6Tie8d2TOsyx51UMEiQIS94B13oTqqYgGGoAAAAASUVORK5CYII=';

var image_down_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABg1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8aT76cAAAAgHRSTlMAafwJfflezc+3WA7Z5Rk6PAvpBNE73kJT89QxZ48czNIv9A1DnI3qKQUaymjT4a7HdVuGf85LR20CVHr+tLBlA0GvYSTYZEnbAcazNPX4yB4GrAgnmL6Bcj4qIVKIe8kdVadIEe27B90bOG/3Er1rYJq1wibyh+4Q5CMzRllMXDo5euMAAAGfSURBVFjD7dblUwJBGAbw5aSlBJRGQERBkLC7u7u7u7veP90jDnaEcdhjP+k9X5h9Zu43O7PLe4eQECH/KGsIaUooOEcLK75LpehH628idSrE+nMANfyQ3MY2BRm0C6mM462tUwJAJtVyUB1WmsoSFZEk46D6TBcYS3UKPpCYawxD5VxHImVD/RHIxMQbGintkGQcppkcOkuutQPYfkDfmjck556ZTSydve2YY5UWk0Mww672VPh+XFqCU8tA+whtL+KOpa+bF3Rh8B4ymDNaSnSzG9IPIpsL34/HTPZfS58auMPYuYNMWcQXOsD3U9ZDOkZkkCvqwSIqUI2WfEDmgiQxRANiIp8GKtDLO6/Znw19oOdXhKoROtEUBr1F5Y9f4dt1XygqKgh6YqcHwMQkQBWICr1H6czTgrpoQde0IGnekJEWNEwLMv/GPDDB/M/fDioVeLYA5GqoYt+xNRY4toJkCiBUG7vTEVxJu2Z549RbqXQuba7uVDZWO66mgw6d7kYaEPvvCb+REIp/srGzLP4aa0n8zKFkKUSIkD+Qb9QrYMvxAbaBAAAAAElFTkSuQmCC';

exports = module.exports = instance;
