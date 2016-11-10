'use strict'

const bcrypt = require('bcrypt-as-promised');

const data = {
  test: [{test: true}],
  companies: [
    {
      id: 1,
      name: 'company1',
      address: '1234 company1 ln.',
    },
    {
      id: 2,
      name: 'company2',
      address: '1234 company2 ln.'
    },
    {
      id: 3,
      name: 'company3',
      address: '1234 company3 ln.'
    }
  ],
  contacts: [
    {
      id: 1,
      first_name: 'contact1',
      last_name: 'contact1',
      email: 'contact.1@gmail.com',
      phone_num: 1111111111,
      linkedin_url: 'linkedin1',
      twitter_url: 'twitter1',
      job_title: 'CEO',
      company_id: 1,
      user_id: 1
    },
    {
      id: 2,
      first_name: 'contact2',
      last_name: 'contact2',
      email: 'contact.2@gmail.com',
      phone_num: 2222222222,
      linkedin_url: 'linkedin2',
      twitter_url: 'twitter2',
      job_title: 'Recruiter',
      company_id: 2,
      user_id: 2
    },
    {
      id: 3,
      first_name: 'contact3',
      last_name: 'contact3',
      email: 'contact.3@gmail.com',
      phone_num: 3333333333,
      linkedin_url: 'linkedin3',
      twitter_url: 'twitter3',
      job_title: 'Web-Developer',
      company_id: 3,
      user_id: 3
    }
  ],
  default_tags: [
    {
      id: 1,
      name: 'Potential Employer'
    },
    {
      id: 2,
      name: 'Potential Client'
    },
    {
      id: 3,
      name: 'Current Client'
    },
    {
      id: 4,
      name: 'Friend of Friend'
    },
    {
      id: 5,
      name: 'Friend'
    },
    {
      id: 6,
      name: 'Tech Savvy'
    },
    {
      id: 7,
      name: 'Creative'
    },
    {
      id: 8,
      name: 'Designer'
    },
    {
      id: 9,
      name: 'Colleague'
    },
    {
      id: 10,
      name: 'Developer'
    }
  ],
  created_tags: [
    {
      id: 1,
      name: 'created1',
      user_id: 1,
    },
    {
      id: 2,
      name: 'created2',
      user_id: 1,
    },
    {
      id: 3,
      name: 'created3',
      user_id: 2,
    },
    {
      id: 4,
      name: 'created4',
      user_id: 2,
    },
    {
      id: 5,
      name: 'created5',
      user_id: 3,
    },
    {
      id: 6,
      name: 'created6',
      user_id: 3,
    }
  ],
  contact_default_tag: [
    {
      id: 1,
      contact_id: 1,
      default_tag_id: 1,
    },
    {
      id: 2,
      contact_id: 1,
      default_tag_id: 2,
    },
    {
      id: 3,
      contact_id: 2,
      default_tag_id: 3,
    },
    {
      id: 4,
      contact_id: 2,
      default_tag_id: 4,
    },
    {
      id: 5,
      contact_id: 3,
      default_tag_id: 5,
    },
    {
      id: 6,
      contact_id: 3,
      default_tag_id: 6,
    }
  ],
  contact_created_tag: [
    {
      id: 1,
      contact_id: 1,
      created_tag_id: 1,
    },
    {
      id: 2,
      contact_id: 1,
      created_tag_id: 2,
    },
    {
      id: 3,
      contact_id: 2,
      created_tag_id: 3,
    },
    {
      id: 4,
      contact_id: 2,
      created_tag_id: 4,
    },
    {
      id: 5,
      contact_id: 3,
      created_tag_id: 5,
    },
    {
      id: 6,
      contact_id: 3,
      created_tag_id: 6,
    }
  ]
};

module.exports = data;
