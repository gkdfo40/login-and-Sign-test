import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/regist.module.css'
export default function Sign() {
    const contentType = 'application/json'
    const router = useRouter()
    const [data, setData] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
    })

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        setData({
            ...data,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const ok = formValidata()
        if (ok) {
            postData(data)
        }
        else alert("비밀번호가 일치하지 않습니다.")
    }

    const formValidata = () => {
        if (data.password === data.passwordConfirm) return true
        return false
    }

    const postData = async (data) => {
        try {
            const res = await fetch('/api/users/signapi', {
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
            router.push('/login')
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
                        type="text"
                        placeholder="아이디"
                        name="username"
                        value={data.username}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="비밀번호"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        name="passwordConfirm"
                        value={data.passwordConfirm}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    )
}