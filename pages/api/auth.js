// pages/api/auth.js
import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  try {
    const response = await axios.post('https://oauth.deriv.com/oauth/token', null, {
      params: {
        client_id: process.env.DERIV_APP_ID,
        client_secret: process.env.DERIV_APP_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.DERIV_REDIRECT_URI,
      },
    });

    const { access_token } = response.data;

    // Store the token in a cookie or session
    res.status(200).json({ token: access_token });
  } catch (error) {
    res.status(500).json({ error: 'Error exchanging authorization code' });
  }
}
