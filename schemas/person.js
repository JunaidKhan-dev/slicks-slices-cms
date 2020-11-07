import {MdPerson as icon} from 'react-icons/md'

export default {
    // computer name
    name: 'person',
    // visible title
    title: 'slicemasters',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: '100'
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Tell something about them'
        },
        {
            
                name: 'image',
                title: 'Image',
                type: 'image',
                options:{
                    hotspot: true
                }
            
        }
    ]
}