class TestController {
    async testServer(req, res) {
        try {
            return res.status(200).json({ message: 'El servidor esta UP!!' });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new TestController();