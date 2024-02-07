export default {
  name: 'post',
  type: 'document',
  title: 'Пост',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Описание',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Ссылка',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Контент',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Подпись',
            },
          ],
        },
      ],
    },
  ],
}
