<?php

namespace App\Entity;

use App\Repository\CarTypeRepository;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CarTypeRepository::class)
 * @Vich\Uploadable
 */
class CarType
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank (
     *     message="Merci de saisir un nom de type"
     * )
     * @Assert\Length (
     *      min = 2,
     *      max = 50,
     *      minMessage = "Votre nom doit contenir au minimum {{ limit }} caractères",
     *      maxMessage = "Votre nom peut contenir au maximum {{ limit }} caractères",
     *      allowEmptyString=false
     * )
     * @Assert\Regex(
     *     pattern="#^[a-zA-Z0-9\-\é\è\ê\ë\ï\ö|\s]{2,50}$#",
     *     match=true,
     *     message="Merci de saisir un nom valide"
     * )
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Car", mappedBy="type")
     * @ORM\OrderBy({"price" = "ASC"})
     */
    private $Cars;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function __construct()
    {
        $this->image = new EmbeddedFile();
        $this->Cars = new ArrayCollection();
    }

    /**
     * @return Collection|Car[]
     */
    public function getCars(): Collection
    {
        return $this->Cars;
    }

    public function addCar(Car $car): self
    {
        if (!$this->Cars->contains($car)) {
            $this->Cars[] = $car;
            $car->setType($this);
        }
        return $this;
    }

    public function removeCar(Car $car): self
    {
        if ($this->Cars->contains($car)) {
            $this->Cars->removeElement($car);
            if ($car->getType() === $this) {
                $car->setType(null);
            }
        }
        return $this;
    }

    /**
     * @Vich\UploadableField(mapping="vehicule_image", fileNameProperty="image.name", size="image.size", mimeType="image.mimeType", originalName="image.originalName", dimensions="image.dimensions")
     *
     * @var File|null
     */
    private $imageFile;

    /**
     * @ORM\Embedded(class="Vich\UploaderBundle\Entity\File")
     *
     * @var EmbeddedFile
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var DateTimeInterface|null
     */
    private $updatedAt;

    /**
     * @param File|UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null)
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImage(EmbeddedFile $image): void
    {
        $this->image = $image;
    }

    public function getImage(): ?EmbeddedFile
    {
        return $this->image;
    }
}
