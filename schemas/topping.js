import {FaPepperHot as icon} from 'react-icons/fa'

export default {
    // computer name
    name: 'topping',
    // visible title
    title: 'Toppings',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'what is the name of the Topping'
        },
        {
            name: 'vegetarian',
            title: 'vegetarian',
            type: 'boolean',
            description: 'Vegetarian or not?',
            options: {
                layout: 'checkbox'
            }
            
        }
        
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({name, vegetarian})=>({
            title: ` ${name} ${vegetarian ? '🍀': ''}`
        })
        
    }
}