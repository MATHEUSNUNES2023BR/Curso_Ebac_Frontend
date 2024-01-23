module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{ 
                     './dev/styles/main.css' : './src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true
                },
                files:{
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files:['src/styles/**/*.less', 'src/index.html'],
                tasks: ['less:development', 'replace:dev']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:
                    [
                        {
                            match:"ENDERECO_DO_CSS",
                            replacement: "./styles/main.css"
                        },
                        {
                            match:"ENDERECO_DO_JS",
                            replacement: "./scripts/main.js"
                        },
                    ]
                },
                files:[
                        {
                            expand:true,
                            flatten: true,
                            src:['src/index.html'],
                            dest:'dev/'
                        },
                        {
                            expand:true,
                            flatten: true,
                            src:['src/scripts/main.js'],
                            dest:'dev/scripts'
                        },
                    ]
            },
            dist:{
                options:{
                    patterns:
                    [{
                        match:"ENDERECO_DO_CSS",
                        replacement: "./styles/main.min.css"
                }]
                },
                files:[{
                        expand:true,
                        flatten: true,
                        src:['prebuild/index.html'],
                        dest:'dist/'
                }]
            }
        },

        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'prebuild/index.html':'src/index.html'
                }
            }
        },
        imagemin: {
            dynamic:{
                files:[{
                    expand:true,
                    cwd: 'src/images/',
                    src:['**/*.{png,jpg,gif}'],
                    dest: 'dev/images'
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin')
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist']);
}