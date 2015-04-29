module.exports = {
    main: {
        files: [
            {expand: true, flatten: true, src: ['bower_components/fontawesome/fonts/**'], dest: 'src/main/webapp/fonts/', filter: 'isFile'},
            {expand: true, flatten: true, src: ['bower_components/bootstrap/fonts/**'], dest: 'src/main/webapp/fonts/', filter: 'isFile'}
        ]
    }
};
