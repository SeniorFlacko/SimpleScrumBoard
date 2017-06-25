''' from rest_framework.generics import ListAPIView

from .serializers import ListSerializer,CardSerializer
from .models import List,Card

class ListApi(ListAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class CardApi(ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer '''    

from rest_framework.viewsets import ModelViewSet

from .serializers import ListSerializer,CardSerializer
from .models import List,Card

class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer