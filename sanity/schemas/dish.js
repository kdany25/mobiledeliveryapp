import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short decription',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price od the dish in GBP',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
