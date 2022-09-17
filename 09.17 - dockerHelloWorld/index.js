const express =require("express")
const app = express()
app.use(express.json())

app.get("/Hey-Docker", (req, res) => {
    res.status(200).json({
        mensagem: "Hey Docker!!",
    })
})

app.listen(5200, () => console.log("up and running inside docker"))