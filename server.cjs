const express = require('express');
const cors = require('cors');
const { CohereClientV2 } = require('cohere-ai');

const app = express();

app.use(cors());
app.use(express.json());

const cohere = new CohereClientV2({
    token: 'cohere_du3wrnHwywsU1eEn0ogwNlPkNDs9NYzJKz2w4SQE0cnf9B'
});

app.post('/chat', async (req, res) => {

    try {

        const response = await cohere.chat({
            model: 'command-r-08-2024',
            messages: req.body.messages
        });

        res.json(response);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});