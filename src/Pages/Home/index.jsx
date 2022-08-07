/* eslint-disable react/jsx-no-comment-textnodes */
import TableComponent from "../../Components/TableComponent"
import { Image, Button } from 'react-bootstrap'
import Contact from "../../Components/Contact"


const Home = () => {
    return (
        <>
            <div id="hero" className="container-fluid p-0">
                <div className="row">
                    <Image className="gambar-1" src='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' fluid />
                </div>
                <div className="row">
                    <div class="position-absolute heading">
                        <h1>Programmer</h1>
                        <h2>Muhammad Nurwibawanto</h2>
                        <Button variant="primary" className="mb-2" type="button">Linkedin Profile</Button>
                    </div>
                </div>
            </div>

            <div id="biografi" class="container">
                <div class="row">
                    <h2 class="text-center">Biografi</h2>
                </div>
                <p>Halo perkenalkan nama saya Muhammad Nurwibawanto biasa dipanggil anto, keseharian saya mengajar di smk
                    sebagai guru mapel Informatika tetapi hanya sebatas honorer. saya sangat tertarik dibidang programmer
                    lantaran menurut saya sanggat mengasikan, disamping itu saya juga sudah membuat project yang saya kerjakan
                    sendiri dalam waktu 2 bulan lamanya, nama projectnya computer based test dengan membuat siswa tidak ujian
                    lagi di keras tetapi menggunakan hp/ laptop mereka. program ini digunakan juga di smk darmawan tempat saya
                    berkerja.</p>
            </div>

            <div class="container-fluid p-0">
                <div class="row justify-content-center gx-2">
                    <div class="col-4" id="skill1">
                        <h2>Skill</h2>
                        <ul>
                            <li>php</li>
                            <li>javascript</li>
                            <li>Mysql</li>
                            <li>Mogodb</li>
                        </ul>
                    </div>
                    <div class="col-4" id="skill2">
                        <h2>Other SKill</h2>
                        <ol>
                            <li>Nodejs</li>
                            <li>Codeigniter 3</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2 class="text-center">Keluarga</h2>
                <div class="row">
                    <TableComponent />
                </div>
            </div>
            <div id="contact" class="container mb-2">
                <h2 class="text-center">contact</h2>
                <Contact />
            </div>

        </>
    )
}

export default Home