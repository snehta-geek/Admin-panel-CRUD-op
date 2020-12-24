import bcrypt from "bcryptjs";
const adData={
    users:[
        {
            name:"Admin",
            email:"admin@example.com",
            password:bcrypt.hashSync('12345',8),
            isAdmin:true,
        }
    ],

    mentors:[
        {
            name: "Olivia",
            field: "Technical",
            designation: "MERN stack developer"
        },
        {
            name: "Harsh",
            field: "Educational Training",
            designation: "JAVA faculty"
        }, {
            name: "Swati",
            field: "Human Resource",
            designation: "HR Recruitment"
        }
    ]
   
   
};

export default adData;