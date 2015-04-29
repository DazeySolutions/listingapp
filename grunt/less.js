module.exports = {

    // Development settings
    dev: {
        files: {
        "src/main/webapp/css/main.css": "gruntsrc/less/main.less",
        }
    },

    // Production settings
    prod: {
        options:{
            compress: true
        },
	files: {
        "src/main/webapp/css/main.css": "gruntsrc/less/main.less",
        }
    }
};
