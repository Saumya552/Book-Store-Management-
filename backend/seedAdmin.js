const mongoose = require('mongoose');
const User = require('./src/users/user.model');

require('dotenv').config();

async function seedAdmin() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await User.findOne({ role: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists');
            process.exit();
        }

        // Create admin user
        const admin = new User({
            username: 'admin',
            password: 'admin123', // This will be hashed by the pre-save hook
            role: 'admin'
        });

        await admin.save();
        console.log('Admin user seeded successfully');

        process.exit();
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
}

seedAdmin();
