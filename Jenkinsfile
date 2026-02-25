pipeline {
    agent any
    tools {
        nodejs "NodeJS 25.3.0"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Venus-Aggarwal1/my-dev-latest-pipeline.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        
        stage('Run Unit Tests') {
            steps {
                // Execute the test script defined in package.json
                sh 'npm test'
            }
    }
        stage('Deploy to EC2') {
            steps {
                // Use the 'Publish Over SSH' plugin via a script step or configure in job UI
                script {
                    def remoteDir = '/home/ubuntu/.nvm/versions/node/v24.14.0/bin' // Target directory on EC2
                    def remoteUser = 'ubuntu' // Your EC2 username
                    def remoteHost = '3.16.38.194' // Your EC2 public IP or DNS

                    // Commands to run on the remote EC2 instance
                    sshagent(['ec2-ssh-key']) { // Use the ID from Jenkins Credentials
                        //sh "ssh -o StrictHostKeyChecking=no ${remoteUser}@${remoteHost} 'mkdir -p ${remoteDir}'"
                        //sh "scp -o StrictHostKeyChecking=no -r * ${remoteUser}@${remoteHost}:${remoteDir}"
                        sh "ssh -o StrictHostKeyChecking=no ${remoteUser}@${remoteHost} 'cd ${remoteDir} && npm install --production && pm2 restart app.js || pm2 start app.js'"
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline completed.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
