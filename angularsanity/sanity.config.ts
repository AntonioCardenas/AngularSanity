import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'AngularSanity',
  projectId: '',
  dataset: 'production',
  apiVersion: '2021-10-21',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
