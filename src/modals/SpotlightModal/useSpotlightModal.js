import { useQueryLoader } from 'react-relay'
import { useFormik } from 'formik'

import SearchQuery from './graphql/SearchQuery'

const useSpotlightModal = () => {
  const [queryReference, loadQuery] = useQueryLoader(SearchQuery, undefined)

  const formik = useFormik({
    initialValues: {
      search: '',
      include: ['image', 'document', 'component'],
    },
    onSubmit: (values) => loadQuery(values),
  })

  return {
    formik,
    queryReference,
  }
}

export default useSpotlightModal
