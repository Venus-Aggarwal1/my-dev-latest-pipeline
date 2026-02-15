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
