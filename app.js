const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json()); 

app.post('/chat', async (req, res) => {
    const prompt = req.body.prompt;
    const max_tokens = req.body.max_tokens;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt,
            max_tokens,
        }, {
            headers: {
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred.' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
