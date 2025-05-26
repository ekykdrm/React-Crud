pipeline{
    agent any

    tools{
        nodejs 'NodeJS'
    }
    stages{
        stage('Build'){
            steps{
                echo 'Building'
                git branch: 'main', url: 'https://github.com/ekykdrm/React-Crud.git'
                bat 'npm install'
                bat 'npm run build'
            }
        }
    }
}