export default {
  name: 'blogPage',
  title: 'Blogiartikkeli',
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
      name: 'publishDate',
      title: 'Julkaisupäivä',
      type: 'datetime'
    },
    {
      name: 'author',
      title: 'Kirjoittaja',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'categories',
      title: 'Kategoriat',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'contentBlocks',
      title: 'Sisältöblokit',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'paragraph',
          title: 'Tekstikappale',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'paragraph',
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
          title: 'Kuva',
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
        },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Koodi',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'code',
              hidden: true
            },
            {
              name: 'code',
              title: 'Koodi',
              type: 'text'
            },
            {
              name: 'language',
              title: 'Koodikieli',
              type: 'string',
              options: {
                list: [
                  {title: 'JavaScript', value: 'javascript'},
                  {title: 'HTML', value: 'html'},
                  {title: 'CSS', value: 'css'},
                  {title: 'Python', value: 'python'},
                  {title: 'PHP', value: 'php'}
                ]
              }
            }
          ]
        },
        {
          type: 'object',
          name: 'quoteBlock',
          title: 'Lainaus',
          fields: [
            {
              name: 'type',
              type: 'string',
              initialValue: 'quote',
              hidden: true
            },
            {
              name: 'quote',
              title: 'Lainaus',
              type: 'text'
            },
            {
              name: 'author',
              title: 'Kirjoittaja',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tagit',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'relatedPosts',
      title: 'Liittyvät artikkelit',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'blogPage'}]
      }]
    }
  ]
} 