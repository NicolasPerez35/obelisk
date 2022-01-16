import English from "../components/Flags/English"
import Spanish from "../components/Flags/Spanish"

export const Locale = [
    {
        id: 1,
        name: 'English',
        language_code: 'en',
        locale: 'en-US',
        avatar: {
            icon: <English svg={false} />,
            svg: <English svg={true} />
        }
    },
    {
        id: 2,
        name: 'Español',
        default: true,
        language_code: 'es',
        locale: 'es-ES',
        avatar: {
            icon: <Spanish svg={false} />,
            svg: <Spanish svg={true} />
        }
    }
]
