from rest_framework.viewsets import ModelViewSet
from .models import Store
from .serializers import StoreSerializer

class EmpresasViewSet(ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer