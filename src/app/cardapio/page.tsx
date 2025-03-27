'use client'
import MenuIcon from '@/assets/icons/interface/menu.svg'
import { IngredientList, Modal, Table } from '@/components'
import EditIcon from '@/assets/icons/interface/edit.svg'
import TrashIcon from '@/assets/icons/action/trash.svg'
import MountainIcon from '@/assets/icons/interface/mountain.svg'
import SearchIcon from '@/assets/icons/interface/search.svg'
import ImageIcon from '@/assets/icons/interface/image.svg'
import { ColumnDefinition } from '@/components/@types/Table'
import { IOrder } from '@/@types/getOrder'
import { useCallback, useState } from 'react'
import { Button, Input } from '@/components/UI'
import { Ingredient } from '@/components/@types/IngredienteList'

const categories = [
  {
    icon: '🍕',
    name: 'Pizza',
  },
  {
    icon: '🍔',
    name: 'Lanches',
  },
  {
    icon: '🏷️',
    name: 'Promoções',
  },
  {
    icon: '🍺',
    name: 'Bebidas',
  },
  {
    icon: '🍟',
    name: 'Porções',
  },
  {
    icon: '🥗',
    name: 'Saladas',
  },
  {
    icon: '🍕',
    name: 'pizza',
  },
  {
    icon: '🍔',
    name: 'Lanches',
  },
  {
    icon: '🏷️',
    name: 'Promoções',
  },
  {
    icon: '🍺',
    name: 'Bebidas',
  },
  {
    icon: '🍟',
    name: 'Porções',
  },
  {
    icon: '🥗',
    name: 'Saladas',
  },
  {
    icon: '🍕',
    name: 'pizza',
  },
  {
    icon: '🍔',
    name: 'Lanches',
  },
  {
    icon: '🏷️',
    name: 'Promoções',
  },
  {
    icon: '🍺',
    name: 'Bebidas',
  },
  {
    icon: '🍟',
    name: 'Porções',
  },
  {
    icon: '🥗',
    name: 'Saladas',
  },
]
const ingredients = [
  {
    icon: '🧀',
    name: 'Queijo',
  },
  {
    icon: '🍔',
    name: 'Lanches',
  },
  {
    icon: '🏷️',
    name: 'Promoções',
  },
  {
    icon: '🍺',
    name: 'Bebidas',
  },
  {
    icon: '🍟',
    name: 'Porções',
  },
  {
    icon: '🥗',
    name: 'Saladas',
  },
  {
    icon: '🍕',
    name: 'pizza',
  },
  {
    icon: '🍔',
    name: 'Lanches',
  },
  {
    icon: '🏷️',
    name: 'Promoções',
  },
  {
    icon: '🍺',
    name: 'Bebidas',
  },
  {
    icon: '🍟',
    name: 'Porções',
  },
  {
    icon: '🥗',
    name: 'Saladas',
  },
  {
    icon: '🍕',
    name: 'pizza',
  },
  {
    icon: '🍔',
    name: 'Lanches',
  },
  {
    icon: '🏷️',
    name: 'Promoções',
  },
  {
    icon: '🍺',
    name: 'Bebidas',
  },
  {
    icon: '🍟',
    name: 'Porções',
  },
  {
    icon: '🥗',
    name: 'Saladas',
  },
]

export default function Menu() {
  const [screen, setScreen] = useState<string>('products')
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<IOrder | null>(null)
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    [],
  )
  const [filteredIngredients, setFilteredIngredients] =
    useState<Ingredient[]>(ingredients)
  const [searchTerm, setSearchTerm] = useState('')

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  type IDataProducts = {
    image: string
    name: string
    category: string
    price: number
  }
  const dataProducts = [
    {
      image: 'image Pizza',
      name: 'Quatro Queijos',
      category: 'Pizza',
      price: 40.0,
    },
    {
      image: 'image Pizza',
      name: 'Quatro Queijos',
      category: 'Pizza',
      price: 40.0,
    },
    {
      image: 'image Pizza',
      name: 'Quatro Queijos',
      category: 'Pizza',
      price: 40.0,
    },
  ]

  const columnsProducts: ColumnDefinition<IDataProducts>[] = [
    {
      id: 'image',
      header: () => 'Imagem',
      accessor: 'image',
    },
    {
      id: 'name',
      header: () => 'Nome',
      accessor: 'name',
    },
    {
      id: 'category',
      header: () => 'Categoria',
      accessor: 'category',
      cell: (info) => (
        <div className="flex items-center gap-2">
          <span role="img" aria-label="pizza">
            🍕
          </span>
          {info.getValue()}
        </div>
      ),
    },
    {
      id: 'price',
      header: () => 'Total',
      accessor: 'price',
    },
    {
      id: 'actions',
      header: () => 'Ações',
      cell: (info) => {
        const rowData = (info as any).row.original
        return (
          <div>
            <button className="mr-5" onClick={() => {}}>
              <EditIcon />
            </button>
            <button>
              <TrashIcon />
            </button>
          </div>
        )
      },
    },
  ]

  // Atualiza os ingredientes selecionados
  const handleSelectionChange = useCallback((selected: Ingredient[]) => {
    setSelectedIngredients(selected)
  }, [])

  // Filtra os ingredientes com base no texto digitado
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)

    // Filtrar ingredientes que correspondem ao termo de pesquisa
    const filtered = ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(term),
    )

    setFilteredIngredients(filtered)
  }

  const modalContent = () => {
    return (
      <div className="grid grid-cols-2 gap-5">
        <div>
          <span className="text-large text-gray-700 font-bold">Imagem</span>
          <div className="w-[416px] h-[200px] border rounded-md mt-5 mb-8">
            {/* <Image src={pizzaImage} alt="relogio" className="w-full h-[160px]"/> */}
            <div className="flex justify-center items-center w-full h-[70%] bg-gray-100 rounded-t-md">
              <MountainIcon />
            </div>
            <div className="flex justify-center items-center w-full h-[30%]">
              <ImageIcon className="text-primary mr-2" />
              <Button
                title="Alterar Imagem"
                type="text"
                className="max-w-fit text-small"
                onClick={openModal}
              />
            </div>
          </div>
          <Input
            label="Nome do Produto"
            name="productName"
            placeholder="Quatro Queijos"
            className="mb-8"
          />
          <Input
            label="Descrição"
            name="description"
            placeholder="Pizza de Quatro Queijos com borda tradicional"
            maxLength={110}
            className="mb-2"
          />
          <p className="text-small text-gray-700 mb-8">Máximo 110 caracteres</p>
          <span className="text-small text-gray-700">Categoria</span>
          <div className="grid grid-cols-3 gap-2 items-center mt-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-center items-center border w-fit px-3 py-2 rounded-3xl"
              >
                <span className="text-medium mr-2">{category.icon}</span>
                <p className="text-small text-gray-900">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-large text-gray-700 font-bold">
              Ingredientes
            </span>
            <Button
              title="Novo Ingrediente"
              type="text"
              className="max-w-fit text-small"
              onClick={openModal}
            />
          </div>
          <Input
            label="Busque o ingrediente"
            name="ingredients"
            placeholder="Ex: Quatro Queijos"
            className="mb-8"
            icon={<SearchIcon />}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IngredientList
            ingredients={filteredIngredients}
            onSelectionChange={handleSelectionChange}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Editar Produto"
        className="w-[920px] h-[95%]"
      >
        {modalContent()}
      </Modal>
      <div className="w-full h-20 flex justify-between mb-20">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <MenuIcon className="stroke-gray-900 scale-150 mr-5" />
            <h4 className="text-h4 text-gray-900">Cardápio</h4>
          </div>
          <p className="text-medium text-gray-700">
            Gerencie os produtos do seu estabelecimento
          </p>
        </div>
      </div>
      <div className="mb-5 border-b-[1px]">
        <button
          className={`px-8 py-3 rounded-t-lg text-small text-gray-700  ${screen === 'products' && 'bg-white text-primary font-bold'} `}
          onClick={() => {
            setScreen('products')
          }}
        >
          Produtos
        </button>
        <button
          className={`px-8 py-3 rounded-t-lg text-small text-gray-700  ${screen === 'categories' && 'bg-white text-primary font-bold'} `}
          onClick={() => {
            setScreen('categories')
          }}
        >
          Categorias
        </button>
      </div>
      {screen === 'products' ? (
        <>
          <div className="flex justify-between items-center mt-12 mb-5 ml-4">
            <div className="flex justify-start items-center w-full">
              <h1 className="font-bold text-large mr-3">Produtos</h1>
              <p className="bg-gray-300/20 p-1 rounded-md">
                {dataProducts.length}
              </p>
            </div>
            <Button
              title="Novo Produto"
              type="text"
              className="max-w-fit text-small"
              onClick={openModal}
            />
          </div>
          <Table data={dataProducts} columns={columnsProducts} />
        </>
      ) : (
        <>
          <div className="flex justify-start items-center mt-12 mb-5">
            <h1 className="font-bold text-large mr-3">Categorias</h1>
            {/* <p className="bg-gray-300/20 p-1 rounded-md">{data.length}</p> */}
          </div>
          {/* <Table data={data} columns={columns} /> */}
        </>
      )}
    </div>
  )
}
