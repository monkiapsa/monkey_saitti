export default {
  name: 'basicPage',
  title: 'Perussivu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sivun nimi',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      title: 'Hero-kuva',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'pageTitle',
      title: 'Sivun otsikko',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pageDescription',
      title: 'Sivun kuvaus',
      type: 'text',
      rows: 3
    },
    {
      name: 'contentBlocks',
      title: 'Sisältöblokit',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'textBlock',
          title: 'Tekstiblokki',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'text',
              hidden: true
            },
            {
              name: 'title',
              title: 'Otsikko',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Sisältö',
              type: 'blockContent'
            }
          ]
        },
        {
          type: 'object',
          name: 'imageBlock',
          title: 'Kuvablokki',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'image',
              hidden: true
            },
            {
              name: 'image',
              title: 'Kuva',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'alt',
              title: 'Vaihtoehtoinen teksti',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Kuvateksti',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
} 