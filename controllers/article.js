const test = (req,res) =>{
    return res.status(200).json({
        messagge: "This is a pruebe action in my article controllers"
    });
}

const names = (req,res)=>{

    console.log("End Point 'pruebe' working");

    return res.status(200).json([{
        name: "Kevin",
        lastname: "Villanueva",
        age: "28 years old"
    }, 
    {
        name: "David",
        lastname: "Villanueva",
        age: "26 years old"
    }, 
    {
        name: "Nathaly",
        lastname: "Villanueva",
        age: "17 years old"
    }]);

}

const create = (req,res)=>{

    //Collect parameters per post to save


    //Validate Data


    //Create the object to save


    //Assign values ​​to object based on model (manual or automatic)


    //Save the article in Data Base

    return res.status(200).json({
        messagge:"Action of Save"
    })
}

module.exports = {
    test,
    names,
    create
}