import { useQueryLoader } from 'react-relay'
import { useFormik } from 'formik'
import { object, string } from 'yup'

import SearchQuery from './graphql/SearchQuery'

const useSpotlightModal = () => {
  const [queryReference, loadQuery] = useQueryLoader(SearchQuery, undefined)

  const formik = useFormik({
    initialValues: {
      search: '',
      include: ['image', 'document', 'component'],
    },
    validationSchema: object().shape({
      search: string()
        .required()
        .min(3),
    }),
    onSubmit: (values) => loadQuery(values),
  })

  return {
    formik,
    queryReference,
  }
}

export default useSpotlightModal
