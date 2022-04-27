export default {
    namespaced: true,
    // 함수로 만드는이유 -> 불변성때문에 데이터가 바뀔때마다 반환을 해주어야 한다. (불변성)
    state: () => ({
        name: 'HEROPY',
        email: 'these@gmail.com',
        blog: 'http://heropy.blog',
        phone: '+82-10-1234-5678',
        image: 'https://heropy.blog/css/images/logo.png'
    })
}