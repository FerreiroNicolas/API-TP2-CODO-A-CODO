from rest_framework.routers import SimpleRouter
from . import viewsets
router = SimpleRouter()

# en este caso se le anexa a la ruta de las urls de la app




router.register("api", viewsets.EmpresasViewSet)

