import React, { Fragment, useState, useEffect } from 'react'
import { getProducts } from '../../services/index'
import Navbar from '../../components/Navbar/Navbar'
import MenuItens from '../../components/menu-itens/menu-itens'
import ReactModal from 'react-modal'
import Input from '../../components/Input/Input'
import MenuSection from '../../components/menu-section/menu-section'
import './style.css'

export const NewOrder = () => {

  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [checkedMenu, setCheckedMenu] = useState('all-day')

  useEffect(() => {
    const storeProducts = async () => {
      const response = await getProducts()
      setProducts(response)
    }
    storeProducts()
  }, [])

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='container-menu'>
          <div className='radio-tile-group-menu'>

            <div className='input-container-menu'>
              <Input
                inputRequired
                inputId='breakfast'
                inputClassName='radio-button-menu'
                inputType='radio'
                inputName='radio'
                inputValue='breakfast'
                inputOnChange={
                  () => {
                    setCheckedMenu('breakfast')
                  }
                }
              />
              <div className='radio-tile-menu'>
                <label htmlFor='breakfast' className='radio-tile-label-menu'>Café da manhã</label>
              </div>
            </div>

            <div className='input-container-menu'>
              <Input
                inputRequired
                inputId='all-day'
                inputClassName='radio-button-menu'
                inputType='radio'
                inputName='radio'
                inputValue='all-day'
                inputOnChange={
                  () => {
                    setCheckedMenu('all-day')
                  }
                }
              />
              <div className='radio-tile-menu'>
                <label htmlFor='all-day' className='radio-tile-label-menu'>Almoço/Jantar</label>
              </div>
              <section className={checkedMenu === 'breakfast' ? '' : 'hide'}>
                <MenuSection
                  menuSectionTitle='Lanches'
                  products={products.filter((product) => product.name === 'Misto quente')}
                  onClick={
                    () => {
                      console.log('misto')
                    }
                  }

                />
                <MenuSection
                  menuSectionTitle='Bebidas'
                  products={products.filter((product) => product.name !== 'Misto quente' && product.type === 'breakfast')}
                  onClick={
                    () => {
                      console.log('bebida-quente')
                    }
                  }

                />
              </section>
              <section className={checkedMenu === 'all-day' ? '' : 'hide'}>
                <MenuSection
                  menuSectionTitle='Hambúrguer'
                  products={products.filter((product) => product.sub_type === 'hamburguer' && (product.id === 33 || product.id === 42))}
                  onClick={
                    () => {
                      setShowModal(true)
                    }
                  }

                />
                <MenuSection
                  menuSectionTitle='Acompanhamentos'
                  products={products.filter((product) => product.sub_type === 'side')}
                  onClick={
                    () => {
                      console.log('acompanhamento')
                    }
                  }

                />
                <MenuSection
                  menuSectionTitle='Bebidas'
                  products={products.filter((product) => product.sub_type === 'drinks')}
                  onClick={
                    () => {
                      console.log('bebidas-frias')
                    }
                  }

                />
              </section>
            </div>
          </div>
        </div>
      </main>
      <ReactModal
        isOpen={showModal}
        contentLabel='Minimal Modal Example'>
        Modal
      </ReactModal>
    </Fragment>
  )
}
