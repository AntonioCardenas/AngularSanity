import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'AngularSanity',
  projectId: '81pocpw8',
  dataset: 'production',
  apiVersion: '2021-10-21',
  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
})
