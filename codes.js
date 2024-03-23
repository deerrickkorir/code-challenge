const readline = require('readline');

function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >=60 && marks <=79) {
        return "B";
    } else if (marks >=50 && marks <=59) {
        return "C";
    } else if (marks >=40 && marks <=49) {
        return "D";
    } else if (marks >=0  && marks <=39){
        return "E";
    }
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("STUDENT GOT ?(between 0 to 100): ", (marksStr) => {
        rl.close();
        let marks = parseFloat(marksStr);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade = calculateGrade(marks);
            console.log("Grade:", grade);
        } else {
            console.log("Marks should be between 0 and 100.");
        }
    });
}

main();
