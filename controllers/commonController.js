exports.index = (req,res) => {
    return res.status(200).json({
        success: true,
        message: "Server successfully running and up"
    })
}
