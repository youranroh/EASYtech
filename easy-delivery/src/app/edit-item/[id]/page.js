import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import '../../page.css';

function updateItemInfo( {params}) {
    const [item, setItem] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        tag: '',
    });

    const router = useRouter();
    const id = params.id;
    console.log(id);

    useEffect(() => {
        axios
        .get('http://localhost:3000/api/items/${id}')
        .then((res) => {
            setItem({
                name: res.data.name,
                price: res.data.price,
                description: res.data.description,
                image: res.data.image,
                tag: res.tag.image,
            });
        })
        .catch((err) => {
            console.log('Error from UpdateItemInfo');
        });
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.image,
            tag: item.tag,
        };

        axios
        .put('http://localhost:3000/api/items/${id}', data)
        .then((res) => {
            router.push('/', data)
        })
        .catch((err) => {
            console.log('Error in UpdateItemInfo.');
        });
    };
}
