import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from '../styles/login.module.css'

export default function Login() {
    const contentType = 'application/json'
    const router = useRouter()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setData({
            ...data,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        postData(data)
    }

    const postData = async (data) => {
        try {
            const res = await fetch('/api/users/loginapi', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(data),
            })
            if (!res.ok) {
                throw new Error(res.status)
            }
            router.push('/')
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className={styles.container}>

            <div className={styles.form}>
                <Link href="/"><a>NOO NOO</a></Link>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="아이디"
                        name="username"
                        type="text"
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder="비밀번호"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                    <div className={styles.regist}>
                        <Link href="/regist">
                            <a>회원가입</a>
                        </Link>
                    </div>

                    <button type="submmit">로그인</button>
                </form>
            </div>
        </div>
    )
}