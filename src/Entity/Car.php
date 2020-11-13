<?php

namespace App\Entity;

use App\Repository\CarRepository;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=CarRepository::class)
 * @Vich\Uploadable
 */
class Car
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="cars")
     * @Assert\NotBlank
     */
    private $renter;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\CarType", inversedBy="Cars")
     * @Assert\NotBlank
     */
    private $type;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $features = [];

    /**
     * @ORM\Column(type="boolean")
     */
    private $isArchived;

    /**
     * @ORM\Column(type="float")
     * @Assert\Positive(
     *      message = "Le prix ne peut être nul ou négatif."
     * )
     */
    private $price;

    /**
     * @ORM\OneToMany(targetEntity=Rent::class, mappedBy="car", orphanRemoval=true)
     */
    private $rentals;

    /**
     * @ORM\Column(type="boolean")
     */
    private $available;

    public function __construct()
    {
        $this->image = new EmbeddedFile();
        $this->rentals = new ArrayCollection();
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRenter(): ?User
    {
        return $this->renter;
    }

    public function setRenter(?User $renter): self
    {
        $this->renter = $renter;

        return $this;
    }

    public function getType(): ?CarType
    {
        return $this->type;
    }

    public function setType(?CarType $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getFeatures(): ?array
    {
        return $this->features;
    }

    public function setFeatures(?array $features): self
    {
        $this->features = $features;

        return $this;
    }

    public function getIsArchived(): ?bool
    {
        return $this->isArchived;
    }

    public function setIsArchived(bool $isArchived): self
    {
        $this->isArchived = $isArchived;

        return $this;
    }

    /**
     * @return Collection|Rent[]
     */
    public function getRentals(): Collection
    {
        return $this->rentals;
    }

    public function addRental(Rent $rent): self
    {
        if (!$this->rentals->contains($rent)) {
            $this->rentals[] = $rent;
            $rent->setCar($this);
        }

        return $this;
    }

    public function removeLocation(Rent $rent): self
    {
        if ($this->rentals->contains($rent)) {
            $this->rentals->removeElement($rent);
            if ($rent->getCar() === $this) {
                $rent->setCar(null);
            }
        }

        return $this;
    }

    public function getAvailable(): ?bool
    {
        return $this->available;
    }

    public function setAvailable(bool $available): self
    {
        $this->available = $available;

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
     * @return DateTimeInterface|null
     */
    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    /**
     * @param DateTimeInterface|null $updatedAt
     */
    public function setUpdatedAt(?DateTimeInterface $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }

    /**
     * @param File|UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null)
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
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
