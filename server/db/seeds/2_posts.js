'use strict';

exports.seed = (knex) => {
  return knex(`posts`).del().then(() => {
    return knex(`posts`)
      .insert([{
        user_id: 1,
        title: 'hipster1',
        description: 'Letterpress intelligentsia poke before they sold out gastropub tumblr. Godard farm-to-table artisan, pitchfork chillwave williamsburg kale chips pok pok tilde before they sold out pop-up. Direct trade occupy lomo raw denim af irony. Gluten-free raw denim mixtape, cred pour-over street art salvia truffaut hammock stumptown. Succulents hammock affogato direct trade. Squid listicle artisan chambray, stumptown messenger bag fingerstache selvage venmo swag tofu hot chicken sartorial. Venmo tacos vape viral fixie.',
        image: 'http://media.vocativ.com/photos/2015/01/Hipster-Statistics-001928277552.jpg',
        votes: 4,
        created_at: `2016-11-10 09:07:36.372794-06`,
        updated_at: `2016-11-10 09:07:36.372794-06`,
      }, {
        user_id: 2,
        title: 'hipster2',
        description: 'Post-ironic freegan VHS DIY street art seitan twee. Trust fund franzen microdosing pabst green juice drinking vinegar, aesthetic migas flannel hella. Tattooed brunch dreamcatcher, succulents vaporware bespoke shabby chic live-edge forage chambray kickstarter fam freegan. Enamel pin unicorn migas copper mug. Typewriter actually fingerstache fap. Keffiyeh craft beer 8-bit, hella post-ironic church-key asymmetrical everyday carry austin helvetica scenester tacos chillwave put a bird on it. Hammock green juice vape pok pok.',
        image: 'https://yogiallday.files.wordpress.com/2012/06/hipster.jpg',
        votes: 85,
        created_at: `2016-11-10 09:07:36.372794-06`,
        updated_at: `2016-11-10 09:07:36.372794-06`,
      }, {
        user_id: 3,
        title: 'hipster3',
        description: 'Affogato slow-carb 3 wolf moon chicharrones. Biodiesel marfa quinoa scenester flexitarian bushwick, knausgaard ugh readymade green juice bitters four dollar toast meditation post-ironic. Gluten-free fingerstache bushwick ramps XOXO, pork belly cold-pressed franzen thundercats. Microdosing craft beer butcher vape stumptown dreamcatcher raclette, edison bulb la croix banjo synth. Woke roof party four loko street art pork belly seitan. Asymmetrical lomo vegan, cray iceland synth live-edge cred PBR&B +1 four loko chicharrones pickled. Wolf gochujang pour-over, small batch migas ugh knausgaard man braid freegan readymade bespoke raw denim hashtag retro put a bird on it.',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/73/e4/90/73e4902f4d118f0245979aa2c2825c41.jpg',
        votes: 93,
        created_at: `2016-11-10 09:07:36.372794-06`,
        updated_at: `2016-11-10 09:07:36.372794-06`,
      }]);
  });
};
