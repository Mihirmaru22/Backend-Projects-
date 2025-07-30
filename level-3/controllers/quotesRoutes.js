let quotes = [];

export const getQuotes = (req,res) =>{
    res.status(200).json({quotes});
}

export const postQuotes = (req,res) => {
    const {auther , text} = req.body;

    if(!auther || !text){
        res.status(400).json({error : "auther and text are requried"});
    }

    const newQutoes = {
        id : quotes.length + 1,
        auther,
        text,
        timeStampt : new Date().toISOString()
    }

    quotes.push(newQutoes);
    res.status(200).json({sucess : true , data : newQutoes});
}