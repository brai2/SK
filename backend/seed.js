const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Customer = require('./models/Customer');

dotenv.config();

const customers = [
  {
    name: 'Sophia Valerius',
    email: 'sv@aristocratic.co',
    initials: 'SV',
    avatarColor: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    eventTier: 'Diamond VIP Lounge',
    price: 1450.00,
    status: 'confirmed'
  },
  {
    name: 'Julian Thorne',
    email: 'thorne@dewater.io',
    initials: 'JT',
    avatarColor: 'linear-gradient(135deg, #F59E0B, #D97706)',
    eventTier: 'Standard Access',
    price: 299.00,
    status: 'pending'
  },
  {
    name: 'Elena Laurent',
    email: 'elena@royale.io',
    initials: 'EL',
    avatarColor: 'linear-gradient(135deg, #10B981, #059669)',
    eventTier: 'Press Pass [Verified]',
    price: 0.00,
    status: 'confirmed'
  },
  {
    name: 'Marcus Chen',
    email: 'm.chen@elite.com',
    initials: 'MC',
    avatarColor: 'linear-gradient(135deg, #EC4899, #DB2777)',
    eventTier: 'Early Bird GA',
    price: 149.00,
    status: 'cancelled'
  },
  {
    name: 'Isabella Rossi',
    email: 'isabella@luxe.it',
    initials: 'IR',
    avatarColor: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    eventTier: 'Platinum Backstage',
    price: 899.00,
    status: 'confirmed'
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected!');

    await Customer.deleteMany({});
    console.log('🗑️  Cleared existing customers.');

    const result = await Customer.insertMany(customers);
    console.log(`🌱 Seeded ${result.length} customers successfully!`);

    result.forEach((c, i) => {
      console.log(`   ${i + 1}. ${c.name} (${c.email}) - ${c.status}`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Done. Disconnected from MongoDB.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
}

seed();
