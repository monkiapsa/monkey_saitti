export default {
  name: 'servicePage',
  title: 'Palvelusivu',
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
      name: 'features',
      title: 'Ominaisuudet',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Ikoni',
            type: 'image'
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
          }
        ]
      }]
    },
    {
      name: 'contentBlocks',
      title: 'Sisältöblokit',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureWithImage',
          title: 'Ominaisuus kuvalla',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'feature_with_image',
              hidden: true
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
              name: 'image',
              title: 'Kuva',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'imagePosition',
              title: 'Kuvan sijainti',
              type: 'string',
              options: {
                list: [
                  {title: 'Vasen', value: 'image-left'},
                  {title: 'Oikea', value: 'image-right'}
                ]
              }
            },
            {
              name: 'bulletPoints',
              title: 'Listakohdat',
              type: 'array',
              of: [{type: 'string'}]
            }
          ]
        },
        {
          type: 'object',
          name: 'pricing',
          title: 'Hinnoittelu',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'pricing',
              hidden: true
            },
            {
              name: 'title',
              title: 'Otsikko',
              type: 'string'
            },
            {
              name: 'packages',
              title: 'Paketit',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Paketin nimi',
                    type: 'string'
                  },
                  {
                    name: 'price',
                    title: 'Hinta',
                    type: 'string'
                  },
                  {
                    name: 'features',
                    title: 'Ominaisuudet',
                    type: 'array',
                    of: [{type: 'string'}]
                  },
                  {
                    name: 'ctaText',
                    title: 'Painikkeen teksti',
                    type: 'string'
                  }
                ]
              }]
            }
          ]
        }
      ]
    },
    {
      name: 'ctaSection',
      title: 'CTA-osio',
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
          name: 'buttonText',
          title: 'Painikkeen teksti',
          type: 'string'
        }
      ]
    }
  ]
} 