const express = require('express');
const app = express();
const dff = require('dialogflow-fulfillment');

app.get ('/',(req, res)=>{

    res.send("We are live")

});

app.post('/', express.json(), (req, res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res

    });

    function demo(agent){
        agent.add("sending response from webhook server");
    }

    var intentMap = new Map();
    agent.handleRequest('date.between', demo)
    agent.handleRequest(intentMap);

}
)
app.listen(3333, ()=>console.log("Server os live at port 3333"));