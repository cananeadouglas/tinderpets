import axios from 'axios';

const supabase = axios.create({
    baseURL: 'https://fjhzcylpsgbfxknifarj.supabase.co/rest/v1',
    ContentType: 'application/json',
    Prefer: 'return=minimal',
    Authorization: 'Bearer SUPABASE_KEY',
    headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaHpjeWxwc2diZnhrbmlmYXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3OTAwMzIsImV4cCI6MjAxMjM2NjAzMn0.1yI8q0Mf_0HmX1b4GMnRhrk6kzC3USzVk-BAhRXrHuA',
    }
})

export default supabase;