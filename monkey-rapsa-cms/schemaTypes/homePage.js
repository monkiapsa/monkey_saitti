export default {
  name: 'homePage',
  title: 'Etusivu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sivun nimi',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroSection',
      title: 'Hero-osio',
      type: 'object',
      fields: [
        {
          name: 'heroImage',
          title: 'Hero-kuva',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'title',
          title: 'Otsikko',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Kuvaus',
          type: 'text'
        },
        {
          name: 'primaryButton',
          title: 'Ensisijainen painike',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Teksti',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            }
          ]
        },
        {
          name: 'secondaryButton',
          title: 'Toissijainen painike',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Teksti',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'aboutSection',
      title: 'Meistä-osio',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Otsikko',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Sisältö',
          type: 'text'
        }
      ]
    },
    {
      name: 'missionSection',
      title: 'Missio-osio',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Otsikko',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Sisältö',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Kuva',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'visionSection',
      title: 'Visio-osio',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Otsikko',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Sisältö',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Kuva',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'services',
      title: 'Palvelut',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Otsikko',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Kuvaus',
            type: 'text'
          },
          {
            name: 'link',
            title: 'Linkki',
            type: 'string'
          }
        ]
      }]
    }
  ]
} 