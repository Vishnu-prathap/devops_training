pipeline{
    agent any
    environment{
        NAME = "first_api"
    }
    stages{
        
        stage('Build'){
            steps{
                sh "docker build -t ${NAME} ."
            }
        }
        
        stage("Run"){
            steps{
                sh "docker run -d -p 5000:3000 --name ${NAME} ${NAME}:latest"
                sh "sleep 5"
                sh "docker ps -a"
            }
        }

        stage("Test"){
            steps{
                sh 'curl -o /dev/null -s -w "%{http_code}\n" http://localhost:5000/ababa '
            }
        }
    }
    post{
        always{
            sh "docker logs ${NAME}"
                  }
    }
}