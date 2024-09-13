import axios from 'axios';

export default async function handler(req, res) {
  const { token } = req.query;

  try {
    const response = await axios.get('https://api.deriv.com/v2/account', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
